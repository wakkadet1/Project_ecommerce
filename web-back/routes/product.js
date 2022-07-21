const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

router.get('/products', (req, res) => {
  console.log('list');
  Product.find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
  //   res.json(200);
});

module.exports = router;
