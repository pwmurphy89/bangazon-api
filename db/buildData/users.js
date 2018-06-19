const faker = require("faker")
const {numbers: {numUsers} } = require("./numbers.json")

module.exports.buildUsers = function(){
    console.log("getting here")
    let users = [];
    for(let i=0;i<numUsers;i++){
       users.push({
           firstName: faker.name.firstName(),
           lastName: faker.name.lastName(),
           accountDate: faker.date.past().toDateString()
       })
    }
    console.log(users)
    return users
}