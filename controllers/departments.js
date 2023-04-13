const mysql2 = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const getAllDepartments = (req, res) => {
  pool.query("SELECT * FROM departments LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllDepartments,
};
