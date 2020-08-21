const config = require('../config/config');
const Brand = require('../model/Brand');
const Product = require('../model/Product');

module.exports = {
  listBrand: async (req, res) => {
    try {
      const brands = await Brand.find().populate('products');
      res.status(200).json(brands);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
};
