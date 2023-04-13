const express = require("express");
const employeesController = require("../controllers/employees");
const router = express.Router();


router.get("/first_name/:first_name/", employeesController.getEmployeesFirstName);
router.get("/", employeesController.getAllEmployees);
router.get("/:emp_no", employeesController.getEmployeesById);

module.exports = router;
