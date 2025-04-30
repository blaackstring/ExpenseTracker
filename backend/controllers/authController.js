import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

export const login=async(req,res)=>{
  try {
    const {email,password}=req.body;

    console.log(email,password);
    
    if(!email || !password) return res.status(400).send({success:false,message:'Please provide email and password '})

        const user=await User.findOne({email})
        if(!user)return res.status(404).send({success:false,message:'User not Found'})
        const isSamepassword=await bcrypt.compare(password,user.password)
    console.log(isSamepassword);
    

        if(!isSamepassword) return res.status(400).send({success:false,message:'Enter mail or password correctly'})

        

            const token = jwt.sign({ id: user._id }, process.env.SECKEY, { expiresIn: '30d' });
            console.log(token);
            

            res.cookie('token',token,{
                httpOnly:true,
                secure: process.env.NODE_ENV === 'production', // Ensures cookie is sent over HTTPS in production
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days (in milliseconds)
            })

            return res.status(200).send({
                success: true,
                message: 'Authentication successful',
                user: {
                    id: user._id,
                    username:user.username,
                    wallet:user.wallet,
                    email: user.email,
                },
            })
  } catch (error) {
    res.status(500).send({
        success: false,
        message: 'Authentication fail',
   
    })
}}



export const signup = async (req, res) => {

    try {
        const { email, username, password } = req.body;

        if (!email || !password || !username) {
            return res.status(400).send({
                success: false,
                message: "Please provide email, username, and password",
            });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "User exists with this mail",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // salt rounds = 10

        // Create a new user
        const newUser = new User({
            email,
            username,
            password: hashedPassword,
        });

        await newUser.save();


        return res.status(201).send({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Server error, please try again later",
        });
    }
};


export const logout=(req,res)=>{
    try {
        res.removeHeader('Authorization');
        res.clearCookie('token'); // Name must match the one you set
       res.status(200).send({success:true,message:'Logout successfull'})
   
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Error while Logout",
        });
    }
}


export const verify=async(req,res)=>{
   try {
    const userid=req.user.id;
    const user=await User.findById(userid).select('-password');
    if(!user) return res.status(404).send({success:false,message:'User not Found'})
        return res.status(200).send({success:true,user})
    
   } catch (error) {
    console.error(error);
    return res.status(500).send({
        success: false,
        message: "Error while Verifying",
    });
   }
}