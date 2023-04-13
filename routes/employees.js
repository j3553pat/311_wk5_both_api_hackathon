const express = require("express");
const employeesController = require("../controllers/employees");
const router = express.Router();


router.get("/first_name/", employeesController.getEmployeesFirstName);
router.get("/", employeesController.getAllEmployees);

module.exports = router;
