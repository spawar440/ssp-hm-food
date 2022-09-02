const MealType=require("../models/mealtype")
const fs=require("fs")
exports.getAllMeal =(req,res)=>{
MealType.find()
.then(result=>{
    res.status(200).json({
        message:"mealtype fetched successfully",
        data:result
    })
})
.catch(
    error=>{
        res.status(500).json({
            message:"Some DB Error Occured",
            error:error
        })
    }
)
}