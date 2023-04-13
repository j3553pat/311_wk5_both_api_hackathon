const express = require("express");
const salariesController = require("../controllers/salaries");
const router = express.Router();

router.get("/", salariesController.getAllSalaries);
router.get(
  "/firstname/:first_name",
  salariesController.getSalaryByEmployeeName
);
router.get(
  "/employee-number/:id",
  salariesController.getSalaryByEmployeeNumber
);

module.exports = router;
