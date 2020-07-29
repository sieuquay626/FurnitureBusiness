const { Schema, model, mongoose } = require('mongoose');

const orderSchema = Schema({
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products', required: true },
      quantity: { type: Number, require: true },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'users',
  },
  address: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: 'Recieved',
    enum: ['Recieved', 'Processing', 'Delivered', 'Finish', 'Cancelled'],
  },
  total: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('orders', orderSchema);
