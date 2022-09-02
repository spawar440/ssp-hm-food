const Menu=require("../models/menu")
const fs=require("fs")
exports.getAllMenu =(req,res)=>{
    let filter = {
        restaurantName: req.params.restName
    }
    // console.log(filter)
Menu.find(filter)
.then(result=>{
    res.status(200).json({
        message:"Menu fetched successfully",
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