const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const productSchema = new mongoose.Schema({
  productImg: {
    type: String,
    required: true,
  },
  productID: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productDetail: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
mongoose.model('Product', productSchema);
