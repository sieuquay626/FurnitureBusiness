import * as actionTypes from '../actionTypes/recoverpassword';

const handleRecover = (data, callback) => ({
  type: actionTypes.RECOVER,
  payload: {
    data,
    callback,
  },
});
const handleRecoverSuccess = (data) => ({
  type: actionTypes.RECOVER_SUCCESS,
  payload: {
    data,
  },
});
const handleRecoverError = () => ({
  type: actionTypes.RECOVER_SUCCESS,
});

// const handleCheckTokenRefresh = () => ({
//   type: actionTypes.CHECK_TOKEN,
// });

// const handleClearTokenRefresh = () => ({
//   type: actionTypes.CLEAR_TOKEN,
// });

export {
  handleRecover,
  handleRecoverSuccess,
  handleRecoverError,
  // handleCheckTokenRefresh,
  // handleClearTokenRefresh,
};
