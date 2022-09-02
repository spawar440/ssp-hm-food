const express=require('express')
const menucontrol = require("../controller/menu")
const router = express.Router();
router.get('/details/:restName',menucontrol.getAllMenu);
module.exports=router;
