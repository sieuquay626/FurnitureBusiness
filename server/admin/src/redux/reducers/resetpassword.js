import * as actionTypes from '../actionTypes/resetpassword';

const initialState = {
  password: '',
  tokenReset: '',
  isReseted: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.RESET_SUCCESS: {
      return {
        password: action.payload.data,
        tokenReset: action.payload.data,
        isReseted: true,
      };
    }

    default: {
      return state;
    }
  }
};
