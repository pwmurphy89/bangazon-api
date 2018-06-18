const faker = require("faker")
const {numbers: {numProducts, numProductTypes, numUsers} } = require("./numbers.json")

module.exports.buildProducts = function(){
    let products = [];
    for(let i=0;i<numProducts.length;i++){
       products.push({
           productTypeId: faker.random.number(numProductTypes),
           price: faker.commerce.price() / 10,
           title: faker.commerce.productName(),
           description: faker.commerce.description(),
           userId: faker.random.number(numUsers)
       })
    }
    return products
}