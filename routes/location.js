const express = require("express")
const locationControl = require("../controller/location")
const router = express.Router();

router.get('',locationControl.getAllLocation)

module.exports=router;