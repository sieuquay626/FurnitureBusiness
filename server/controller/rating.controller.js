const Rating = require('../model/Rating');
const Product = require('../model/Product');
module.exports = {
  listRating: async (req, res) => {
    await Rating.find()
      .populate('users')
      .populate('products')
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  inforRating: async (req, res) => {
    await Rating.findOne(req.params.id)
      .populate('users')
      .populate('products')
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  adddRating: async (req, res) => {
    const newRating = new Rating({
      value: parseInt(req.body.value),
      user: req.body.userId,
      product: req.body.productId,
    });
    await Product.findById(req.body.productId).then((product) => {
      product.ratings.push(newRating);
      product
        .save()
        .then((item) => {
          console.log('Succees add rating in product', item);
        })
        .catch((err) => {
          console.log('Fail add rating in product');
          console.log(err);
        });
    });

    await newRating
      .save()
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  editRating: async (req, res) => {
    await Rating.findById(req.params.id)
      .then(async (rating) => {
        rating.value = parseInt(req.body.value);

        rating
          .save()
          .then((rate) => {
            res.status(200).json(rate);
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
};
