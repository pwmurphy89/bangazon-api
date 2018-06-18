const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');
db.run('PRAGMA foreign_keys = ON');

module.exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM users`, (err, users) => {
      if (err) reject(err);
      resolve(users);
    });
  });
};

module.exports.getOneUser = (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE id = ${id}`, (err, user) => {
        if (err) reject(err);
        resolve(user);
      });
    });
};
module.exports.postUser = (user) => {
    return new Promise((resolve, reject) => {
        let {firstName, lastName, accountDate } = user
        db.run(`INSERT INTO users (firstName, lastName, accountDate) VALUES
        ("${firstName}", "${lastName}", "${accountDate}")`, (err) => {
            if (err) reject(err);
            resolve({message: "added user"});
        });
    });
};
module.exports.putUser = (user, id) => {
    return new Promise((resolve, reject) => {
      let query = `UPDATE users SET `;
      let keys = (Object.keys(user));
      keys.forEach((key) => {
        query += `"${key}" = "${user[key]}",`;
      });
      query = query.slice(0, -1);
      query += ` WHERE id = ${id}`;
      db.run(query, function (err) {
        if (err) reject(err);
        resolve({ message: "updated user", rows_updated: this.changes });
      });
    });
  };
