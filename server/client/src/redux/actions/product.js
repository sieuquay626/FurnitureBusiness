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

const handleProductRecomment = (query) => {
  console.log(query);
  console.log(1);
  return {
    type: actionTypes.GET_PRODUCT_BY_RECOMMENT,
    query,
  };
};

const handleProductRecommentSuccess = (data) => {
  return {
    type: actionTypes.GET_PRODUCT_BY_RECOMMENT_SUCCESS,
    data,
  };
};

const handleProductRecommentError = () => {
  return {
    type: actionTypes.GET_PRODUCT_BY_RECOMMENT_ERROR,
  };
};

export {
  handleProduct,
  handleProductSuccess,
  handleProductError,
  handleProductByCategory,
  handleProductByCategorySuccess,
  handleProductByCategoryError,
  handleProductRecomment,
  handleProductRecommentSuccess,
  handleProductRecommentError,
};
