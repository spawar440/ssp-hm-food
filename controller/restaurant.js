//const restaurantController=require("../models/restaurant.json")
const Restaurant = require("../models/restaurant")
const fs=require("fs")
const { equal } = require("assert")
const { count } = require("console")
exports.getAllRestaurant =(req,res)=>
{
    Restaurant.find()
    .then(result=>{
        res.status(200).json({
            message:"restaurants fetched successfully",
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

exports.getAllDetails=(req,res)=>{
    let Name={name:req.params.name}
    Restaurant.findOne(Name)
    .then(result=>{
        res.status(200).json({
            message:"restaurants fetched successfully",
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

exports.restaurantByCity=(req,res)=>    
{   
    const criteria={city:req.params.cName}
    Restaurant.find(criteria).then(
        result=>{
            res.status(200).json({
                message:`Restaurants in ${req.params.cName} City`,
                data:result
            })
        })
    .catch(
        error=>{
            res.status(500).json({
                message:"Error Occured",
                error:error
            })
    })
}   
 exports.getfilterRestaurant =(req,res)=>
 {
    const filter={}
    if(req.body.city_id){
    filter.city=req.body.city_id;
    }
   
    
    if(req.body.cuisine && req.body.cuisine.length>0){
        filter['Cuisine.name']={$in:req.body.cuisine}
    }


    if(req.body.lcost == 0 && req.body.lcost !==''){
        
        console.log("Entered Here")
        filter.cost=
        {
           $lte:req.body.hcost
        }
    }
    else
    {
      if(req.body.lcost && req.body.hcost)
      {
          filter.cost=
          {
            $lt:req.body.hcost,
            $gt:req.body.lcost
          }
      }
    }

 let sort=1;
     if(req.body.sort)
     {
         sort=req.body.sort 
     }

     console.log("filter:",filter)
     
    // const filter={}

    // if(req.body.city_id){
    //     filter.city= req.body.city_id
    // }

    // if(req.body.cuisine && req.body.cuisine.length >0 ){
    //    filter['Cuisine.name']={ $in : req.body.cuisine }
    // }
    
    //   console.log("Lcost", req.body.lcost==0 && req.body.lcost !=='')
    //   console.log("Hcost", req.body.hcost)
    //   if(req.body.lcost==0 && req.body.lcost !==''){
    //     console.log("Entered Here")
    //     // if(req.body.lcost==0){
    //         filter.cost ={
    //             $lte :req.body.hcost
    //         }
    //     }
    //     else{
    //        filter.cost= {
    //            $lt: req.body.hcost,
    //            $gt: req.body.lcost
    //        } 
    //     }
    

    
    //     filter.sort=req.body.sort
    

    Restaurant.find(filter).limit(2).skip(2*(req.params.pageNo-1)).sort({cost:sort})
    .then(
        result=>{
            Restaurant.find(filter).count((err,count)=>
            {
                if(err)
                    console.log(err)
                else
                res.status(200).json({
                    message:`Restaurants Fetched Successfully`,
                    data:result,
                    totalRecords:count
                }) 
            })
           
        }
    )
    .catch(
        error=>{
            res.status(500).json({
                message:"Error Occured",
                error:error
            })
    }
    )

 }     


//     const filteredRestaurants = restaurantController.filter((item)=>item.name==req.params.cName)
//       filteredRestaurants.length?
//     res.status(200).json({
//         message:"restaurants fetched successfully",
//      data:filteredRestaurants
//     }):
//     res.status(200).json({
//         message:`No records found for`,
//  })     
    


exports.addRestaurant=(req,res)=>
{
  restaurantController.push(req.body)
  fs.appendFile("F:/React/Full Stack Development/NodeJS/Node_Express_Routing_MVC/models/restaurant.json",JSON.stringify(restaurantController),(err)=>{
    if(err)
         console.log("Some error occured")
    console.log("Appended Successfully")    
})
res.status(200).json({
    message:`New Restaurant Added Successfully`,
    data:restaurantController
   })  
//       fs.writeFile('../models/restaurant.json',JSON.stringify(restaurantController,null,10),(err)=>{
//     if (err) 
//         throw err;
//     res.status(200).json({
//         message:`New Restaurant Added Successfully for ${req.body.City}`,
//         data:restaurantController
//       }) 
// })
}



    