const express = require("express");
const router = express.Router();

const {createPet,addMedia,removeMedia,getPetDetails,editPet,deletePet} = require("../controllers/Pet");
const { auth } = require("../middlewares/AuthMiddleware");

//create pet
router.post("/create",auth,createPet);

//add media in pet 
router.post("/media/add",addMedia);

//remove media in pet
router.post("/media/remove",removeMedia);

//pet detail
router.get("/detail",getPetDetails);


//edit pet
router.put("/edit",auth,editPet);

//delete pet
router.delete("/delete",auth,deletePet);

module.exports = router;
