const express = require("express");
const titlesController = require("../controllers/titles");
const router = express.Router();

router.get("/", titlesController.getAllTitles);

module.exports = router;
