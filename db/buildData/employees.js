const faker = require("faker")
const { numbers: {numDepartments, numEmployees} } = require("./numbers.json")

module.exports.buildEmployees = function(){
    let employees = [];
    for(let i=0;i<numEmployees.length;i++){
        employees.push({
            departmentId: Math.floor(Math.random() * numDepartments) + 1,
            firstName: faker.firstName(),
            lastName: faker.lastName()
        })
    }
    return employees
}