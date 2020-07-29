const Product = require('../model/Product');
const Comment = require('../model/Comment');
const Supplier = require('../model/Supplier');
const Category = require('../model/Category');

module.exports = {
  listProduct: async (req, res) => {
    await Product.find()
      .populate('comments')
      // .populate('supplier')
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
        console.log(Array.isArray(product));
        console.log(product.length);

        if (Array.isArray(product) && product.length) {
          res.status(400).json({ msg: 'Product already exists' });
        } else {
          const coverImageName = req.file != null ? req.file.filename : null;

          let arrCategories = req.body.categories.split('-');

          const newProduct = new Product({
            ...req.body,
            coverImage: req.file.path,
            supplier: req.body.supplier_id,
            categories: arrCategories,
          });

          for (x of arrCategories) {
            let category = await Category.findById(x);
            category.products = [...category.products, newProduct._id];
            category.save();
          }

          const supplier = await Supplier.findById(req.body.supplier_id);
          supplier.products = [...supplier.products, newProduct._id];
          await supplier.save();

          newProduct
            .save()
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        }
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Product already exists' });
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
