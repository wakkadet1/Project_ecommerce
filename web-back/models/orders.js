const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  summary: {
    type: Number,
    required: true,
  },
});
mongoose.model('Orders', orderSchema);
