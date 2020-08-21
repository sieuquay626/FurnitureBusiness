const { Schema, model, mongoose, SchemaType } = require('mongoose');

const BrandSchema = Schema({
  title: {
    type: String,
    unique: true,
    require: true,
  },
  // products: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'products',
  //   },
  // ],
  description: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('brands', BrandSchema);
