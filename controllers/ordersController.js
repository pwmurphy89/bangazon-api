const { getOrders, getOneOrder, deleteOneOrder, postOrder, putOrder } = require('../models/ordersModel');

const { dbDeleteEmployeeOrders } = require('../models/Employee-Order');

module.exports.getAllOrders = (req, res, next) => {
    getOrders()
    .then( (orders) => {
    res.status(200).json(orders);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisOrder = (req, res, next) => {
    getOneOrder(req.params.id)
    .then( (order) => {
      res.status(200).json(order);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisOrder = (req, res, next) => {
    deleteOneOrder(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisOrder = (req, res, next) => {
    postOrder(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisOrder = (req, res, next) => {
    putOrder(req.body, req.params.id)
    .then( (updatedOrder) => {
      res.status(200).json(updatedOrder);
    })
    .catch( (err) => {
      next(err);
    });
};