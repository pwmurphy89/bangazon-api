const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/bangazon.sqlite');
db.run('PRAGMA foreign_keys = ON');

module.exports.getTrainingPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM trainingPrograms`, (err, trainingPrograms) => {
      if (err) reject(err);
      resolve(trainingPrograms);
    });
  });
};

module.exports.getOneTrainingProgram = (id) => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM trainingPrograms WHERE id = ${id}`, (err, trainingProgram) => {
        if (err) reject(err);
        resolve(trainingProgram);
      });
    });
};
module.exports.deleteOneTrainingProgram = (id) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM trainingPrograms WHERE id = ${id}`, (err) => {
        if (err) reject(err);
        resolve({message: "deleted trainingProgram"});
      });
    });
};
module.exports.postTrainingProgram = (trainingProgram) => {
    return new Promise((resolve, reject) => {
        let {title, startDate, endDate, maxAttendees} = trainingProgram
        db.run(`INSERT INTO trainingPrograms (title, startDate, endDate, maxAttendees) VALUES
        ("${title}", "${startDate}", "${endDate}", ${maxAttendees} )`, (err) => {
            if (err) reject(err);
            resolve({message: "added trainingProgram"});
        });
    });
};
module.exports.putTrainingProgram = (trainingProgram, id) => {
    return new Promise((resolve, reject) => {
      let query = `UPDATE trainingPrograms SET `;
      let keys = (Object.keys(trainingProgram));
      keys.forEach((key) => {
        query += `"${key}" = "${trainingProgram[key]}",`;
      });
      query = query.slice(0, -1);
      query += ` WHERE id = ${id}`;
      db.run(query, function (err) {
        if (err) reject(err);
        resolve({ message: "updated trainingProgram", rows_updated: this.changes });
      });
    });
  };
