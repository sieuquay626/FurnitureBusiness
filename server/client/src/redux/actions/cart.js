import * as actionTypes from '../actionTypes/cart';

const handleAddCart = (data) => {
  return {
    type: actionTypes.ADD_TO_CART,
    data,
  };
};

const handleGetCart = () => {
  return {
    type: actionTypes.GET_CART,
  };
};

const handleMinusCart = (data) => {
  return {
    type: actionTypes.MINUS_TO_CART,
    data,
  };
};

const handleDeleteCart = (data) => {
  return {
    type: actionTypes.DELETE_TO_CART,
    data,
  };
};
export { handleAddCart, handleGetCart, handleMinusCart, handleDeleteCart };
