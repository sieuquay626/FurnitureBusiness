import * as actionTypes from '../actionTypes/product';

const handleProduct = (query) => {
  return {
    type: actionTypes.GET_PRODUCT,
    query,
  };
};

const handleProductSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    data,
  };
};

const handleProductError = () => {
  return {
    type: actionTypes.GET_PRODUCT_ERROR,
  };
};

const handleProductByCategory = (data) => {
  console.log('data', data);
  return {
    type: actionTypes.GET_PRODUCT_BY_CATEGORY,
    data,
  };
};

const handleProductByCategorySuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_BY_CATEGORY_SUCCESS,
    data,
  };
};

const handleProductByCategoryError = () => {
  return {
    type: actionTypes.GET_PRODUCT_BY_CATEGORY_ERROR,
  };
};

export {
  handleProduct,
  handleProductSuccess,
  handleProductError,
  handleProductByCategory,
  handleProductByCategorySuccess,
  handleProductByCategoryError,
};
