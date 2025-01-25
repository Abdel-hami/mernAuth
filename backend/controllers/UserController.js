import asyncHandler from "express-async-handler"
//@Desc Auth user/set token 
//route POST /api/users/auth
//@acces Public
const AuthUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth User"})
})

//@Desc Register a new user
//route POST /api/users
//@acces Public
const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"register User"})
})

//@Desc Loguut an user
//route POST /api/users/logout
//@acces Public
const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Log Out User"})
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