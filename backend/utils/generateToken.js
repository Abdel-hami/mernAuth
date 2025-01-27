import jwt  from "jsonwebtoken";

/*1. Why Do We Need Cookies and Tokens?
When you visit a website (like an online store or a social media app), the server needs to know who you are as you move around. For example:
You log in with your username and password.
Now, the server needs to remember it’s you every time you click on a new page or take an action (like adding items to a cart).*/



const generateToken = (res, userId)=>{
    //create token
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '30d'
    });
    // save it in coockie
    res.cookie('jwt',token, {
        httpOnly : true,
        secure: process.env.NODE_ENV !== "developement",
        maxAge: 30*24*60*60*1000,
        sameSite:'strict'
    })
}
export default generateToken;