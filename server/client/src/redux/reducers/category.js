import * as actionTypes from '../actionTypes/category';

const initialState = {
  category: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_SUCCESS: {
      return {
        category: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
