import { combineReducers } from 'redux';
import category from './category';
import product from './product';
import auth from './login';
import cart from './cart';

const rootReducer = combineReducers({
  category,
  product,
  auth,
  cart,
});

export default rootReducer;
