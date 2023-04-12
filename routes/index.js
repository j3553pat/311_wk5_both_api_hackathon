const router = require("express").Router();

// All tables found in the employees database (Only uncomment if you plan on using the route or else it will create an error)
const employeesRouter = require("./employees");
const departmentsRouter = require("./departments");
// const dept_empRouter = require("./dept_emp");
// const dept_managerRouter = require("./dept_manager");
// const salariesRouter = require("./salaries");
const titlesRouter = require("./titles");

// All routes that can be used (Only uncomment if you plan on using the route or else it will create an error)
router.use("/employees", employeesRouter);
router.use("/departments", departmentsRouter);
// router.use("/dept_emp", dept_empRouter);
// router.use("/dept_manager", dept_managerRouter);
// router.use("/salaries", salariesRouter);
router.use("/titles", titlesRouter);

module.exports = router;
