const express = require('express');
// const connection = require('../../db');

const router = express.Router();

const ProductController = require('../controllers/product-controller');

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getOne);

router.post('/', ProductController.createOne);

router.delete('/:id', ProductController.deleteOne);

module.exports = router;
