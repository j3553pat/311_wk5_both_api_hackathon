const getEmployeesById = (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
}





module.exports = {
    getEmployeesById
}