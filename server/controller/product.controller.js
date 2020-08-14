const Product = require('../model/Product');
const Comment = require('../model/Comment');
const Supplier = require('../model/Supplier');
const Category = require('../model/Category');
const moment = require('moment');

module.exports = {
  listProduct: async (req, res) => {
    await Product.find()
      // .populate('comments')
      .populate('categories')
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  inforProduct: async (req, res) => {
    const products = await Product.findById(req.params.id)
      .populate('comments')
      .populate('supplier')
      .then((product) => {
        res.status(200).json(product);
      })

      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  pageProduct: async (req, res) => {
    let begin = (req.params.numberPage - 1) * req.body.numberOfProduct;
    let end = req.params.numberPage * req.body.numberOfProduct;
    await Product.find()
      .populate('comments')
      // .populate('supplier')
      .then((product) => {
        product.slice(begin, end);
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  addProduct: async (req, res) => {
    await Product.find({ title: req.body.title })
      .then(async (product) => {
        if (!product.length) {
          let coverImage = req.file != null ? req.file.filename : '';
          let arrCategories = req.body.categories
            ? req.body.categories.split('-')
            : [];

          let newProduct = new Product({
            ...req.body,
            purchase_price: Number(req.body.purchase_price),
            price: Number(req.body.price),
            tax: Number(req.body.tax),
            discount: Number(req.body.discount),
            coverImage: coverImage,
            categories: arrCategories,
          });

          if (arrCategories.length) {
            for (x of arrCategories) {
              let category = await Category.findById(x);

              category.products = [...category.products, newProduct._id];
              category.save();
            }
          }

          newProduct
            .save()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              console.log('test');
              res.status(400).json({ msg: err });
            });
        } else {
          res.status(400).json({ msg: 'Product already exists' });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  editProduct: async (req, res) => {
    try {
      await Product.findById(req.params.id)
        .then((product) => {
          const newProduct = new Product({
            ...product,
            ...req.body,
            coverImage: req.file.path,
            supplier: req.body.supplier_id,
            categories: arrCategories,
          });
          product
            .save()

            .then((sup) => {
              res.status(200).json(sup);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        })
        .catch((err) => {
          res.status(400).json({ msg: 'Product Not Found' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id)
        .populate('comments')
        .then((product) => {
          console.log(product);
          res
            .status(200)
            .json({ msg: 'Product deleted successfully!', delete: product });
        })
        .catch((err) => {
          res.status(400).json({ msg: 'Product Not Found  ' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },
};
