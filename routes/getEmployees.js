const express = require("express");
const employeesController = require("../controllers/getEmployees");
const router = express.Router();

router.get("/", employeesController.getAllEmployees);
router.get("/:id", employeesController.showEmployee);

module.exports = router;
