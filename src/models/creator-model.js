const connection = require('../../db');

class CreatorModel {
  constructor(creatorData) {
    this.name = creatorData.prenom;
    this.mail = creatorData.mail;
  }

  static getAll(callback) {
    connection.query('SELECT * from creator', (error, results) => {
      callback(error, results);
    });
  }
}
module.exports = CreatorModel;
