import mongoose from "mongoose";

const Posts =new mongoose.Schema({
title:{
    type:String,
    required:true,
},
    video:{
    type:String,
    required:true,
    },
    Auth:{
        type:String,
        unique:true,
        required:true
    },
    createdAt: { type: Date, default: Date.now }
})
export const Post = mongoose.models.Posts || mongoose.model("Posts",Posts)
