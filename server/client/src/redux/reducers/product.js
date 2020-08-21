import * as actionTypes from '../actionTypes/product';

const initialState = {
  currentProductType: 'New Arrival',
  listProduct: [],
  query: {
    page: '1',
    pageSize: '20',
    search: '',
  },
  productByCategory: [],
  productByRecomment: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        currentProductType: 'New Arrival',
        listProduct: action.data,
        query: action.query,
      };
    }
    case actionTypes.GET_PRODUCT_BY_CATEGORY: {
      return {
        ...state,
        currentProductType: action.data.title,
        productByCategory: action.data.products,
        query: action.query,
      };
    }
    case actionTypes.GET_PRODUCT_BY_RECOMMENT_SUCCESS: {
      return {
        ...state,
        query: action.query,
        productByRecomment: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
