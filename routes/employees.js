const express = require('express')

const router = express.Router()

const controller = require('../controllers/employees')

router.getEmployeesById('/employees/:id', controller.getEmployeesById)

module.export = router;