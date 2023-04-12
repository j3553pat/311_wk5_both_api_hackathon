const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployeesByFirstName = (req, res) => {
    let sql = "SELECT * FROM employees WHERE first_name = ?"
    sql =  mysql.format(sql, [req.params.id])

}

const getEmployeesFirstName = (req, res) => {
  pool.query("select first_name from employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
}