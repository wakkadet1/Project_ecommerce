const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');

const PORT = 5000;

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', (err) => {
  console.log('err connecting', err);
});
require('./models/orders');
require('./models/products');
app.use(express.json());
app.use(require('./routes/order'));
app.use(require('./routes/product'));
app.listen(PORT, () => {
  console.log('server is running on port:', PORT);
});
