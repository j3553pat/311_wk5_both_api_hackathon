const express = require('express')
const usersController = require('../controllers/employees')
const router = express.Router()

router.get('/', employeesController.getAllSalaries)