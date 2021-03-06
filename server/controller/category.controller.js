const config = require('../config/config');
const Category = require('../model/Category');
const Product = require('../model/Product');

module.exports = {
  listCategory: async (req, res) => {
    try {
      const categories = await Category.find().populate('products');
      res.status(200).json(categories);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  inforCategory: async (req, res) => {
    try {
      await Category.findById(req.params.id)
        .populate('products')
        .populate('parent')
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(400).json({ msg: 'Category Not Found' });
        });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },

  getParentCategory: async (req, res) => {
    console.log('ok');
    await Category.find({ parent: { $exists: false } })
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: 'Category Not Found' });
      });
  },

  getSubCategory: async (req, res) => {
    await Category.findOne({ parent: req.params.id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Category Not Found' });
      });
  },

  addCategory: async (req, res) => {
    await Category.findOne({ title: req.body.title })
      .then((category) => {
        if (category) {
          res.status(400).json({ msg: 'Category already exists' });
        } else {
          const newCategory = new Category({ ...req.body });
          newCategory
            .save()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },

  editCategory: async (req, res) => {
    await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    )
      .then((category) => {
        res.status(200).json(category);
      })
      .catch((err) => {
        return res.status(400).json({ msg: 'Category Not Found' });
      });
  },

  deleteCategory: async (req, res) => {
    await Category.findById(req.params.id)
      .then(async (category) => {
        if (Array.isArray(category.products) && category.products.length) {
          await Product.findById(req.body.product_id)
            .then(async (product) => {
              const newArrCategory = product.categories.filter((item) => {
                return item_id != req.params.id;
              });
              product.categories = [...newArrCategory];
              await product
                .save()
                .then((result) => {
                  console.log(result);
                })
                .catch((err) => {
                  res.status(400).json({ msg: err });
                });
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        }
        category.remove();
        res
          .status(200)
          .json({ msg: 'Category deleted successfully!', delete: category });
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Category Not Found' });
      });
  },
};
