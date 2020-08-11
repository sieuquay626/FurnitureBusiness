import * as actionTypes from '../actionTypes/category';

//FULL CATEGORY
const handleCategory = () => {
  return {
    type: actionTypes.GET_CATEGORY,
  };
};

const handleCategorySuccess = (data) => {
  return {
    type: actionTypes.GET_CATEGORY_SUCCESS,
    data,
  };
};

const handleCategoryError = () => {
  return {
    type: actionTypes.GET_CATEGORY_ERROR,
  };
};

// //PARENT CATEGORY
// const handleParentCategory = () => {
//   type: actionTypes.GET_PARENT_CATEGORY;
// };

// const handleParentCategorySuccess = (data) => {
//   type: actionTypes.GET_PARENT_CATEGORY_SUCCESS, data;
// };

// const handleParentCategoryError = () => {
//   type: actionTypes.GET_PARENT_CATEGORY_ERROR;
// };

// //SUB CATEGORY
// const handleSubCategory = () => {
//   type: actionTypes.GET_SUB_CATEGORY;
// };

// const handleSubCategorySuccess = (data) => {
//   type: actionTypes.GET_SUB_CATEGORY_SUCCESS, data;
// };

// const handleSubCategoryError = () => {
//   type: actionTypes.GET_SUB_CATEGORY_ERROR;
// };

export {
  handleCategory,
  handleCategorySuccess,
  handleCategoryError,
  // handleParentCategory,
  // handleParentCategorySuccess,
  // handleParentCategoryError,
  // handleSubCategory,
  // handleSubCategorySuccess,
  // handleSubCategoryError,
};
