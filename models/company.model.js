import mongoose from "mongoose";


const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,    
    },
    website:{
        type:String,
       
    },
    location:{
        type:String,
    },
    logo:{
        type:String,
        
    },
    userId:{
        tpe:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})


export const Company = new mongoose.model("Company",companySchema)