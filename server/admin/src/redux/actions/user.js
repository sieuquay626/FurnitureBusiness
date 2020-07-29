import * as actionTypes from '../actionTypes/user';

const handleUserList = (query) => ({
  type: actionTypes.GET_LIST_USER,
  query,
});
const handleUserListSuccess = (data) => ({
  type: actionTypes.GET_LIST_USER_SUCCESS,
  payload: {
    data,
  },
});

const handleUserListError = () => ({
  type: actionTypes.GET_LIST_USER_ERROR,
});

const handleUserDelete = (id, callback) => ({
  type: actionTypes.DELETE_USER,
  payload: {
    id,
    callback,
  },
});

const handleUserDeleteSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

const handleUserDeleteError = () => ({
  type: actionTypes.DELETE_USER_ERROR,
});

const handleUserSetQuery = (query) => ({
  type: actionTypes.LIST_USER_SET_QUERY,
  query,
});

const handleUserCreate = () => {
  return {
    type: actionTypes.CREATE_USER,
  };
};

const handleUserEdit = () => ({
  type: actionTypes.EDIT_USER,
});

const handleClosePopup = () => {
  return {
    type: actionTypes.CLOSE_POPUP,
  };
};

export {
  handleUserList,
  handleUserListSuccess,
  handleUserListError,
  handleUserSetQuery,
  handleUserCreate,
  handleUserEdit,
  handleClosePopup,
};
