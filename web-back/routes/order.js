const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const short = require('short-uuid');
const Orders = mongoose.model('Orders');

router.post('/sendOrder', (req, res) => {
  console.log(req.body);
  if (
    !req.body.name ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.name ||
    !req.body.address ||
    !req.body.products
  ) {
    return res.status(422).json({ error: 'Please add all the fields' });
  }
  const translator = short();
  let orderID = translator.new();
  let date = new Date();
  let node = date
    .toISOString()
    .replace('T', '-')
    .replace(':', '-')
    .substr(0, 16);

  const order = new Orders({
    orderID: orderID + node,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    products: req.body.products,
    summary: req.body.summary,
  });

  order
    .save()
    .then((order) => {
      console.log('Success order!', order);
      res.status(200).json({ status: 'OK', message: 'Successfully order' });
     })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/getsubpost', (req, res) => {
  console.log('select all post');
  let mysort = { _id: -1 };
  Orders.find({})

    .then((posts) => {
      console.log(posts);
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
});

module.exports = router;
