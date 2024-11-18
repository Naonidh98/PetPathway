const express = require("express");
const router = express.Router();

//import controllers
const {createItem,updateItem,deleteItem,getItem,getItemForStore} = require("../controllers/Item");


//create
router.post("/create",createItem);

//update
router.put("/edit",updateItem);

//delete
router.delete("/delete",deleteItem);

//fetch details of a item
router.get("/details",getItem);

//
router.get("/store",getItemForStore)

module.exports = router;
