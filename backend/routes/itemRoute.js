const express = require("express");
const router = express.Router();

//import controllers
const {createItem,updateItem,deleteItem,getItem} = require("../controllers/Item")
//create
router.post("/create",createItem);

//update
router.put("/edit",updateItem);

//delete
router.delete("/delete",deleteItem);

//fetch details of a item
router.get("/details",getItem);

module.exports = router;
