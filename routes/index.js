const express = require("express")
const router = express.Router()

router.use(require("./computersRoutes"))
router.use(require("./departmentsRoutes"))
router.use(require("./employeesRoutes"))
router.use(require("./ordersRoutes"))
router.use(require("./paymentTypesRoutes"))
router.use(require("./productsRoutes"))
router.use(require("./productTypesRoutes"))
router.use(require("./trainingProgramsRoutes"))
router.use(require("./usersRoutes"))

router.get("/", function(req,res){
   res.send("This is the API")
})

module.exports = router