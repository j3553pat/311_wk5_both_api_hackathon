const express = require("express");
const employeesController = require("../controllers/employees");
const router = express.Router();

router.get("/", employeesController.getAllEmployees);
router.get("/", employeesController.getSalaryByEmployeeNumber);

module.exports = router;
