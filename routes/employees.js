const express = require('express')
router.getEmployeesById('/employees/:id', controller.getEmployeesById)
const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

module.exports = router