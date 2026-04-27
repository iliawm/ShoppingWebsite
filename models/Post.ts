import mongoose from "mongoose";
import {user} from "@/models/user";

const Posts =new mongoose.Schema({
title:{
    type:String,
    required:true,
},
    video:{
    type:String,
    required:true,
    },
    Banner:{
    type:String,
        required:true
    },
    Auth: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    IsValidated:{
    type:Boolean
    },
    
    createdAt: { type: Date, default: Date.now }
})
export const Post = mongoose.models.Posts || mongoose.model("Posts",Posts)
