const express = require('express')
const salariesController = require('../controllers/salaries')
const router = express.Router()

router.get('/', salariesController.getAllSalaries)


// Using: localhost:4001/salaries/firstname/*EMPLOYEE FIRST NAME HERE*
router.get("/firstname/:first_name", salariesController.getSalaryByEmployeeName);

module.exports = router;
