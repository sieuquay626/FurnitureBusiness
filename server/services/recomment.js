const User = require('../model/User');
const Product = require('../model/Product');
const RatingList = -require('../model/Rating');

class ML {
  constructor(
    Y,
    n_factors = 2,
    X = None,
    W = None,
    lamda = 0.1,
    learning_rate = 2,
    n_epochs = 50,
    top = 10,
    filename = None
  ) {
    this.Y = Y;
    this.lamda = lamda;
    this.n_factors = n_factors;
    this.learning_rate = learning_rate;
    this.n_epochs = n_epochs;
    this.top = top;
    this.users_count = User.find().count();
    this.items_count = Product.find().count();
    this.ratings_count = RatingList.find().count();
  }
}
