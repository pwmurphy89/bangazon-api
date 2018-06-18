const faker = require("faker")
const {numbers: {numTrainingPrograms, numEmployees, numEmployeeTraining} } = require("./numbers.json")

module.exports.buildEmployeeTraining = function(trainingProgramsArray){
    let employeeTraining = [];
    for(let i=0;i<numEmployeeTraining;i++){
        let maxAttendance = trainingProgramsArray[i].maxAttendance
        let attendance = faker.random.number(maxAttendance)
        for (let j=0; j<attendance; j++) {
            let employeeId = faker.random.number(numEmployees)
            let programId = i + 1
            employeeTrainings.push({
                employeeId,
                programId
            });
        }
    }
    return employeeTraining
}