const Location=require("../models/location")
const fs=require("fs")

exports.getAllLocation=(req,res)=>{
    Location.find()
    .then(result=>{
         res.status(200).json({
             message:"Location Fetched Successfully",
             data:result
         })
    }).catch(
        error=>{
            res.status(500).json({
                message:"Some Error Occured",
                error:error
            })
        }
    )
}