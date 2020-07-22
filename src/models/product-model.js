/* eslint-disable no-unused-vars */
const connection = require('../../db');
const ErrorCustom = require('../utils/ErrorCustom');

class ProductModel {
  constructor(productData) {
    this.name = productData.nom;
    this.category = productData.mail;
    this.price = productData.mdp;
    this.description = productData.description;
    this.photo = productData.photo;
  }

  static getAll(callback) {
    connection.query('SELECT * from product', (error, results, fields) => {
      callback(error, results);
    });
  }

  static getOne(id, callback) {
    const query = 'SELECT * from product WHERE id = ?';
    connection.query(query, id, (error, results) => {
      callback(error, results);
    });
  }

  createOne(callback) {
    const query = 'INSERT INTO product SET ?';
    const {
      name,
      category,
      price,
      description,
      photo,
    } = this;
    connection.query(query, {
      name,
      category,
      price,
      description,
      photo,
    }, (error, results) => {
      callback(error, results);
    });
  }

  static deleteOne(id, callback) {
    const query = 'DELETE FROM product WHERE id = ?';
    connection.query(query, id, (error, results) => {
      callback(error, results);
    });
  }
}

module.exports = ProductModel;
