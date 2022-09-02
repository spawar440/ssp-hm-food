
const shortid=require('shortid');
const Razorpay = require("razorpay");
const crypto = require('crypto');

const Transaction = require("../models/transaction")

const instance = new Razorpay({
    key_id:"rzp_test_PgAPimo9Izyqq2",
    key_secret:"cm8F98x4aoxBfSS6FyQjdCLn"
});


exports.createOrder=async (req, res) => {
    console.log("payment initiated")
       const options={
        amount:req.body.amount*100,
        currency:"INR",
        receipt:shortid.generate(),
        notes: {    key1: "value3",    key2: "value2"  }
       }
  

    try {
      const response = await instance.orders.create(options);
      console.log(response);
      res.json(response)
    } catch (error) {
      console.log(error);
    }
  }

exports.saveTransaction=(req,res)=>{
  console.log("Saveing Transactions...!!!")
  const generate_signature=crypto.createHmac('sha256',instance.key_secret);
  generate_signature.update(req.body.razorpay_order_id+"|"+req.body.razorpay_payment_id+"|"+req.body.razorpay_signature)

   if(req.body.razorpay_signature == generate_signature.digest('hex'))
{
     //save transaction to db
       const transaction=new Transaction({
        // transaction_id:req.body.razorpay_payment_id,
        transaction_amount:req.body.razorpay_amount
       })
       transaction.save(function(err,saveTransaction)
       {
        if(err){
          console.log(err);
          return res.status(500).send("some problem occured",err)
        }
        res.send({transactions:transaction})
       });
       return res.send('success');
    }
    else{
      return res.send('failed');
    }
}