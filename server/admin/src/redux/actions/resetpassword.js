import * as actionTypes from '../actionTypes/resetpassword';

const handleReset = (data, callback) => ({
  type: actionTypes.RESET,
  payload: {
    data,
    callback,
  },
});
const handleResetSuccess = (data) => ({
  type: actionTypes.RESET_SUCCESS,
  payload: {
    data,
  },
});
const handleResetError = () => ({
  type: actionTypes.RESET_ERROR,
});

export { handleReset, handleResetSuccess, handleResetError };
