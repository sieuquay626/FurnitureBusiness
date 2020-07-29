const { Schema, model, mongoose } = require('mongoose');
const Prodcut = require('./Product');
const SupplierSchema = Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('suppliers', SupplierSchema);
