import * as actionTypes from '../actionTypes/login';

const initialState = {
  userInfo: null,
  isLogin: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS: {
      console.log('payload', action.payload.data);

      return {
        userInfo: action.payload.data,
        isLogin: true,
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
