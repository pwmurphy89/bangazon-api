const { getEmployees, getOneEmployee, postEmployee, putEmployee } = require('../models/employeesModel');

module.exports.getAllEmployees = (req, res, next) => {
    getEmployees()
    .then( (employees) => {
    res.status(200).json(employees);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisEmployee = (req, res, next) => {
    getOneEmployee(req.params.id)
    .then( (employee) => {
      res.status(200).json(employee);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisEmployee = (req, res, next) => {
    postEmployee(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisEmployee = (req, res, next) => {
    putEmployee(req.body, req.params.id)
    .then( (updatedEmployee) => {
      res.status(200).json(updatedEmployee);
    })
    .catch( (err) => {
      next(err);
    });
};