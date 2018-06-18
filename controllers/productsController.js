const { getProducts, getOneProduct, deleteOneProduct, postProduct, putProduct } = require('../models/productsModel');

module.exports.getAllProducts = (req, res, next) => {
    getProducts()
    .then( (products) => {
    res.status(200).json(products);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisProduct = (req, res, next) => {
    getOneProduct(req.params.id)
    .then( (product) => {
      res.status(200).json(product);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.deleteThisProduct = (req, res, next) => {
    deleteOneProduct(req.params.id)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisProduct = (req, res, next) => {
    postProduct(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisProduct = (req, res, next) => {
    putProduct(req.body, req.params.id)
    .then( (updatedProduct) => {
      res.status(200).json(updatedProduct);
    })
    .catch( (err) => {
      next(err);
    });
};