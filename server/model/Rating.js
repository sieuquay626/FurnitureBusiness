const { Schema, model, mongoose, SchemaType } = require('mongoose');
const User = require('./User');
const Product = require('./Product');

const RatingSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
  },
  value: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('ratings', RatingSchema);
