const { getPaymentTypes, getOnePaymentType, deleteOnePaymentType, postPaymentType, putPaymentType } = require('../models/paymentTypesModel');

module.exports.getAllPaymentTypes = (req, res, next) => {
    getPaymentTypes()
    .then( (paymentTypes) => {
    res.status(200).json(paymentTypes);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisPaymentType = (req, res, next) => {
    getOnePaymentType(req.params.id)
    .then( (paymentType) => {
      res.status(200).json(paymentType);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisPaymentType = (req, res, next) => {
    deleteOnePaymentType(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisPaymentType = (req, res, next) => {
    postPaymentType(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisPaymentType = (req, res, next) => {
    putPaymentType(req.body, req.params.id)
    .then( (updatedPaymentType) => {
      res.status(200).json(updatedPaymentType);
    })
    .catch( (err) => {
      next(err);
    });
};