const express = require('express')
//const slashRoutes = require('router')
const restController = require("../controller/restaurant")
const router = express.Router();

router.get('',restController.getAllRestaurant)
router.get('/:cName',restController.restaurantByCity)
router.get('/details/:name',restController.getAllDetails)
router.post('/filter/:pageNo',restController.getfilterRestaurant)
//router.post('',restController.addRestaurant)


router.post('',(req,res)=>
{
    res.send(`This is router post method`)
})

router.put('',(req,res)=>
{
    res.send(`This is router put(update) method`)
})

router.delete('',(req,res)=>
{
    res.send(`This is router delete method`)
})

module.exports = router;
