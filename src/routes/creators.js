const express = require('express');
// const connection = require('../../db');

const router = express.Router();

const CreatorController = require('../controllers/creator-controller');

router.get('/', CreatorController.getAll);

module.exports = router;
