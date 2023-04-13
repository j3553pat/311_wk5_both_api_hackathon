const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getEmployeesByFirstName = (req, res) => {
    let sql = "SELECT * FROM employees WHERE first_name = ?"
    sql =  mysql.format(sql, [req.params.id])

}