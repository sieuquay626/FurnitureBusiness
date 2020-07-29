const { Schema, model, mongoose } = require('mongoose');
const User = require('./User');
// const Product = require('./Product');

const CommentSchema = Schema({
  text: {
    type: String,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
    require: 'Product is required field ',
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('comments', CommentSchema);
