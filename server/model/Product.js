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
  ratings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ratings',
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

  avgRating: {
    type: Number,
  },
  rateCount: {
    type: Number,
  },
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
  description: {
    type: String,
  },

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

ProductSchema.pre('save', async (next) => {
  // let product = this;
  // await Rating.count({ product: product._id }, function (err, count) {
  //   console.log(count);
  //   this.rateCount = Number(count);
  // });
  // await Product.findOne({ _id: product._id }, 'ratings', function (
  //   err,
  //   product
  // ) {
  //   // 2. Filter Comments to just those in product.Comments and average the Rating
  //   Rating.aggregate(
  //     [
  //       { $match: { _id: { $in: product.ratings } } },
  //       { $group: { _id: product._id, average: { $avg: '$value' } } },
  //     ],
  //     function (err, result) {
  //       this.avgRating = Number(Math.round(result[0].average));
  //     }
  //   );
  // });
  // console.log(this);
  // if (0 == 2) {
  //   console.log('2');
  //   next();
  // }
});

module.exports = model('products', ProductSchema);
