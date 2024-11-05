const express = require("express");
const router = express.Router();

//import controllers
const {createCategory,editCategory,deleteCategory,getCategories,getCategoryItems} = require("../controllers/Category")
const {auth,isModerator}  = require("../middlewares/AuthMiddleware")

//create
router.post("/create",auth,isModerator,createCategory);

//update
router.put("/edit",auth,isModerator,editCategory);

//delete
router.delete("/delete",auth,isModerator,deleteCategory);

//fetch all categories
router.get("/all",getCategories);
router.get("/item/all",getCategoryItems);

module.exports = router;
