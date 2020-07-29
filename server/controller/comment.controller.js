const Comment = require('../model/Comment');
const Product = require('../model/Product');
const User = require('../model/User');

module.exports = {
  listComment: async (req, res) => {
    await Comment.find()
      .populate('user')
      .populate('product')
      .then((comments) => {
        console.log(comments);

        res.status(200).json(comments);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  inforComment: async (req, res) => {
    await Comment.findById(req.params.id)
      .populate('product')
      .populate('user')
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((err) => {
        res.status(400).json({ msg: err });
      });
  },
  addComment: async (req, res) => {
    const newComment = new Comment({
      text: req.body.text,
      user: req.body.user_id,
      product: req.body.product_id,
    });

    const product = await Product.findById(req.body.product_id);

    product.comments = [...product.comments, newComment];
    await product.save();

    await newComment
      .save()
      .then((result) => {
        result.populate('product');
        res.status(200).json({ msg: 'Create Comment Successfull', result });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  editComment: async (req, res) => {
    await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    )
      .populate('user')
      .populate('product')
      .then((review) => {
        review
          .save()
          .then((result) => {
            res.status(200).json(result);
          })
          .catch((err) => {
            res.status(400).json({ msg: err });
          });
      });

    const comment = await Comment.findById(req.params.id).catch((err) => {
      res.status(400).json({ msg: err });
    });
  },
  deleteComment: async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id)
      .then(async (comment) => {
        const product = await Product.findById(comment.product);
        const newArrComment = product.comments.filter((comment) => {
          return comment._id != req.params.id;
        });
        product.comments = [...newArrComment];
        await product.save();
        res.status(200).json({ msg: 'Comment deleted successfully!' });
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Comment Not Found' });
      });
  },
};
