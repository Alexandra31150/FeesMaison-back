const CreatorModel = require('../models/creator-model');

class CreatorController {
  static getAll(req, res) {
    CreatorModel.getAll((error, results) => {
      res.status(200).json({
        status: 'success',
        results,
      });
    });
  }
}

module.exports = CreatorController;
