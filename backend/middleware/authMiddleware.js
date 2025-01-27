// protect route, you have to be logged in to acces other routes

import  jwt  from "jsonwebtoken";
import userModel from "../models/userModel.js";
import asyncHandler from 'express-async-handler';


const protect = asyncHandler(async (req, res, next)=>{
    let token;
    token = req.body.jwt;

    if(token){
        try{
            const decoded =jwt.verify(jwt,process.env.JWT_SECRET);
            req.user = await userModel.findById(decoded.userId).select('-password');
            next();
        } catch(err){
            res.send(401);
            throw new Error("Not Authorized, invalid token")
        }
    } else {
        res.status(401);
        throw new Error("Not Authorized, no token")
    }
})

export {protect};