import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import userModel from "../models/userModel.js"
//@Desc Auth user/set token 
//route POST /api/users/auth
//@acces Public
const AuthUser = asyncHandler(async(req,res)=>{
    // generate the moddleware tha validate the token created
    const {email, password} = req.body;
    const user = await userModel.findOne({email});
    if(user && (await user.matchPassword(password))){
        generateToken(res,user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email: user.email
        })
    } else{
        res.status(400);
        throw new Error("Invalid Email or password")
    }
})

//@Desc Register a new user
//route POST /api/users
//@acces Public
const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password} =  req.body;
    const userExist = await userModel.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error("User Already Exist");
    }
    const user = await userModel.create({name,email,password});
    if(user){
        generateToken(res,user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email: user.email
        })
    } else{
        res.status(400);
        throw new Error("Invalid Data Entred")
    }
})

//@Desc Loguut an user
//route POST /api/users/logout
//@acces Public
const logoutUser = asyncHandler(async(req,res)=>{
    res.cookie('jwt', '',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message:"User Logged Out"})
})

//@Desc get user profile
//route GET /api/users/profile
//@acces private 
const getUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Profile"})
})

//@Desc updet user profile
//route POST /api/users/profile
//@acces private
const updateUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Update User Profile"})
})
export {
    AuthUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}