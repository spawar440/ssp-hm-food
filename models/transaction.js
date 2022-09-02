// const mongoose=require('mongoose')
// // const Schema = mongoose.Schema;
// const transactionSchema=new mongoose.Schema({
//     transactionid:{
//         type:String
//     },
//     transactionamount:{
//         type:String
//     }
// })
// module.exports=mongoose.model("Transaction",transactionSchema)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transactions = new Schema({
     transaction_id:{
        type:String
    },
    transaction_amount:{
        type:String
    }
});
module.exports = mongoose.model('transactions', Transactions);