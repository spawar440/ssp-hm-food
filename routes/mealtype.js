const express=require('express')
const mealcontrol = require("../controller/mealtype")
const router = express.Router();
router.get('',mealcontrol.getAllMeal);
module.exports=router;
