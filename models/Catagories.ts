import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image:{
        type:String,

    }
});

export const Categories = mongoose.models.Categories || mongoose.model("Categories", CategoriesSchema);
