import mongoose from "mongoose";
import { Categories } from "@/models/Catagories"
const CommentSchema = new mongoose.Schema({
    author: {
        name: { type: String, required: true },
        email: { type: String, required: true }, 
    },
    text: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: null },
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
});

const ProductSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories",
        
    },
    sku:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    availability:{
        type:Number,
        required:true,
        default:0,
    },
    rating:{
        type:Number,
        default:null,
    },
    Comments:[CommentSchema],
    offer:{
        type:Boolean,
        default:false,
    },
    SoldAmount:{
        type:Number,
        default:0,
        required:true,
    }
    
})
export const Products = mongoose.models.Product ||  mongoose.model("Product",ProductSchema)
export const Comments = mongoose.models.Comments || mongoose.model("Comments",CommentSchema)
