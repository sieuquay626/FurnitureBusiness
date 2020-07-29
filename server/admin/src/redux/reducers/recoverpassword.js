import * as actionTypes from '../actionTypes/recoverpassword';

const initialState = {
  email: '',
  isRecover: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.RECOVER_SUCCESS: {
      return {
        email: action.payload.data,
        isRecover: true,
      };
    }

    default: {
      return state;
    }
  }
};
