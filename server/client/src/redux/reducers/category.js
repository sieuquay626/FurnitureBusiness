import * as actionTypes from '../actionTypes/category';

const initialState = {
  listCategory: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        listCategory: action.data,
      };
    }
    default: {
      return state;
    }
  }
};
