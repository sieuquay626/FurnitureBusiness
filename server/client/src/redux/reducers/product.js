import * as actionTypes from '../actionTypes/product';

const initialState = {
  currentMovieType: 'New Arrival',
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
        currentMovieType: 'New Arrival',
        listProduct: action.data,
        query: action.query,
      };
    }
    case actionTypes.GET_PRODUCT_BY_CATEGORY: {
      return {
        ...state,
        currentMovieType: action.data.title,
        productByCategory: action.data.products,
        query: action.query,
      };
    }
    default: {
      return state;
    }
  }
};
