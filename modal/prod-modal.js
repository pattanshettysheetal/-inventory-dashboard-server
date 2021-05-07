const mongoose = require('mongoose');
const prodSchema = new mongoose.Schema({
  id: Number,
  productName: 'String',
  brand: 'String',
  price: Number,
  quantity: Number,
});
const Product = mongoose.model('Product', prodSchema);
module.exports = Product;
