

const getEmployeesById = (req, res) => {
    res.json(employees.filter(user => user.id === parseInt(req.params.id)));
}





module.exports = {
    getEmployeesById
}