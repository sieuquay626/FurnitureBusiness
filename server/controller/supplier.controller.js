const config = require('../config/config');
const Supplier = require('../model/Supplier');

module.exports = {
  listSupplier: async (req, res) => {
    try {
      const suppliers = await Supplier.find().populate('products');
      res.status(200).json(suppliers);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },

  countSupplier: async (req, res) => {
    try {
      const suppliers = await Supplier.find().count();
      res.status(200).json(suppliers);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },
  inforSupplier: async (req, res) => {
    try {
      await Supplier.findById(req.params.id)
        .populate('products')
        .then((result) => {
          res.status(200).json(result);
        })
        .catch((err) => {
          res.status(400).json({ msg: 'Supplier Not Found' });
        });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  },

  addSupplier: async (req, res) => {
    await Supplier.findOne({ name: req.body.name })
      .then((supplier) => {
        if (supplier) {
          res.status(400).json({ msg: 'Supplier already exists' });
        }
        const newSupplier = new Supplier({ ...req.body });
        console.log(newSupplier);

        newSupplier
          .save()
          .then((supplier) => res.json(supplier))
          .catch((err) => {
            res.status(400).json({ msg: err });
          });
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },

  editSupplier: async (req, res) => {
    try {
      await Supplier.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      )
        .then((supplier) => {
          supplier
            .save()
            .then((sup) => {
              res.status(200).json(sup);
            })
            .catch((err) => {
              res.status(400).json({ msg: err });
            });
        })
        .catch((err) => {
          res.status(400).json({ msg: 'Supplier Not Found' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },

  deleteSupplier: async (req, res) => {
    try {
      await Supplier.findById(req.params.id)
        .then((supplier) => {
          if (Array.isArray(supplier.products) && supplier.products.length) {
            supplier.remove();
            res.status(200).json({
              msg: 'Supplier deleted successfully!',
              delete: supplier,
            });
          } else {
            res
              .status(400)
              .json({ msg: 'You should delte products from supplier first ' });
          }
        })
        .catch((err) => {
          //Neu ko co param id thi no se vao catch
          res.status(400).json({ msg: 'Supplier Not Found  ' });
        });
    } catch (err) {
      res.status(400).json({ msg: err });
    }
  },
};
