

const express = require('express')
const employeesController = require('../controllers/employees')
const router = express.Router()

router.getEmployeesById('/employees/:id', controller.getEmployeesById)

module.exports = router


