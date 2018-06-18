const { getUsers, getOneUser, postUser, putUser } = require('../models/usersModel');

module.exports.getAllUsers = (req, res, next) => {
    getUsers()
    .then( (users) => {
    res.status(200).json(users);
    })
    .catch( (err) => {
    next(err);
    });
};
module.exports.getThisUser = (req, res, next) => {
    getOneUser(req.params.id)
    .then( (user) => {
      res.status(200).json(user);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.postThisUser = (req, res, next) => {
    postUser(req.body)
    .then( (message) => {
      res.status(200).json(message);
    })
    .catch( (err) => {
      next(err);
    });
};
module.exports.putThisUser = (req, res, next) => {
    putUser(req.body, req.params.id)
    .then( (updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch( (err) => {
      next(err);
    });
};