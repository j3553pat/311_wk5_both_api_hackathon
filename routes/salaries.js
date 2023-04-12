const express = require("express");
const salariesController = require("../controllers/salaries");
const router = express.Router();

router.get("/firstname/:first_name", salariesController.getSalaryByEmployeeName);

module.exports = router;