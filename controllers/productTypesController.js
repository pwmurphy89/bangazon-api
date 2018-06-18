const { getProductTypes, getOneProductType, deleteOneProductType, postProductType, putProductType } = require('../models/productTypesModel');

const { dbDeleteEmployeeProductTypes } = require('../models/Employee-ProductType');

module.exports.getAllProductTypes = (req, res, next) => {
    getProductTypes()
    .then( (productTypes) => {
    res.status(200).json(productTypes);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisProductType = (req, res, next) => {
    getOneProductType(req.params.id)
    .then( (productType) => {
      res.status(200).json(productType);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisProductType = (req, res, next) => {
    deleteOneProductType(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisProductType = (req, res, next) => {
    postProductType(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisProductType = (req, res, next) => {
    putProductType(req.body, req.params.id)
    .then( (updatedProductType) => {
      res.status(200).json(updatedProductType);
    })
    .catch( (err) => {
      next(err);
    });
};