const express=require("express")
const paymentctr=require("../controller/payment")
const router=express.Router();
router.post('/',paymentctr.createOrder)
router.post('/save',paymentctr.saveTransaction)
module.exports=router;
