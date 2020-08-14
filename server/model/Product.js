const { Schema, model, mongoose } = require('mongoose');
const Comment = require('./Comment');
const Supplier = require('./Supplier');
const Rating = require('./Rating');
const Category = require('./Category');

const ProductSchema = Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  purchase_price: {
    type: Number,
    require: true,
  },

  tax: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },

  discount: {
    type: Number,
    default: 0,
  },

  coverImage: {
    type: String,
  },

  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
  ],

  // supplier: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'suppliers',
  // },

  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'comments',
  //   },
  // ],

  // ratings: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Rating',
  //   },
  // ],
  // avgRating: {
  //   type: Number,
  // },
  // yearOfRelease: {
  //   type: Number,
  // },

  // materials: {
  //   type: String,
  // },
  // brand: {
  //   type: String,
  //   trim: true,
  // },
  // availability: {
  //   type: String,
  //   enum: ['in_stock', 'out_of_stock', 'preorder'],
  //   default: 'out_of_stock',
  // },
  // dimensions: {
  //   type: String,
  // },
  // description: {
  //   type: String,
  // },

  // amount: {
  //   type: Number,
  // },

  // Warranty: {
  //   type: String,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('products', ProductSchema);
