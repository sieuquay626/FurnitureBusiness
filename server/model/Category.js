const { Schema, model, mongoose, SchemaType } = require('mongoose');

const CategorySchema = Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'products',
    },
  ],
  parent: {
    type: String,
    type: Schema.Types.ObjectId,
    ref: 'categories',
  },

  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('categories', CategorySchema);
