const faker = require("faker")
const {numbers: {numUsers} } = require("./numbers.json")

module.exports.buildUsers = function(){
    let users = [];
    for(let i=0;i<numUsers.length;i++){
       users.push({
           firstName: faker.firstName(),
           lastName: faker.lastName(),
           accountDate: faker.date.past().toDateString()
       })
    }
    return users
}