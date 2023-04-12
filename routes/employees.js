const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()


router.get("/", employeesController.getEmployeesFirstName);
module.exports = router