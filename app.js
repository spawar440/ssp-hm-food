const express = require("express");
const slashRoutes = require('./routes/restaurant')
const locationRoutes = require('./routes/location')
const mealRoutes = require('./routes/mealtype')
const menuRoutes=require ('./routes/menu')
const routepayment=require('./routes/routepayments')
// const paymentRoute= require('./routes/payment')
const PORT = 8083;
const bodyparser = require('body-parser')
const cors=require('cors')



//create express server
var app=express();

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://SagarP:root@cluster0.z0ild.mongodb.net/zomato',
()=>{
    console.log("Mongodb Connected")
},
e=>console.log(e))

//add middleware before routes
app.use(bodyparser.json())
app.use(cors())

//middleware routes 
app.use('/restaurants',slashRoutes)
app.use('/location',locationRoutes)
app.use('/mealtype',mealRoutes)
app.use('/menu',menuRoutes)
// app.use('/pay',paymentRoute)
app.use('/pay',routepayment)
// app.use(app.router);
// routes.initialize(app);

app.listen(PORT,()=>{
console.log(`app running on Port ${PORT}`)
})

