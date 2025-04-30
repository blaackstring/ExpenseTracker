import mongoose from "mongoose";


const expenseSchema=new mongoose.Schema({
SpendOn:{
        type:String,
        trim: true,
    },
    date:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        maxlength:60
    },
    category: {
        type: String,
        enum: ['Food', 'Travel', 'Entertainment', 'Other'],
        required: true,
      },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

export const Expense=mongoose.model('Expense',expenseSchema)