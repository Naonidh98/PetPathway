const express = require("express");
const router = express.Router();

const {getStoreData}  = require("../controllers/Store")

router.get("/data",getStoreData)

module.exports = router;
