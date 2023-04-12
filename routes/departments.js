const express = require("express");
const departmentsController = require("../controllers/departments");
const router = express.Router();

router.get("/", departmentsController.getAllDepartments);

module.exports = router;
