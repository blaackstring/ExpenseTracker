import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required: [true, 'Please specify what you spent on'],
        trim: true,
        lowercase: true,
        minlength:4
    },
    email:{
        type:String,
        unique:true,
        required:true,
        index: true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
},{timestamps:true})


export const User=mongoose.model('User',userSchema)