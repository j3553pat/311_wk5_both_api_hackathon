const express = require('express')
const employeesController = require('../controllers/salaries')
const router = express.Router()

router.get('/', employeesController.getAllSalaries)