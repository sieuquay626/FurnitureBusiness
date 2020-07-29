const { Schema, model, mongoose, SchemaType } = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const RatingSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  value: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('ratings', RatingSchema);
