import * as actionTypes from '../actionTypes/login';

const initialState = {
  userInfo: null,
  isOAuth: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS: {
      console.log('data', action.data);
      return {
        userInfo: action.data,
        isOAuth: true,
      };
    }

    case actionTypes.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
