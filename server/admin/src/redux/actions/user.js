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

const handleUserSetQuery = (query) => ({
  type: actionTypes.LIST_USER_SET_QUERY,
  query,
});

const handleClosePopup = () => {
  return {
    type: actionTypes.CLOSE_POPUP,
  };
};

const handleUserCreate = (data, callback) => {
  return {
    type: actionTypes.CREATE_USER,
    payload: {
      data,
      callback,
    },
  };
};

const handleUserCreateSuccess = (data) => {
  return {
    type: actionTypes.CREATE_USER,
    payload: {
      data,
    },
  };
};

const handleUserCreateError = () => {
  return {
    type: actionTypes.CREATE_USER_ERROR,
  };
};

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

const handleUserEdit = () => ({
  type: actionTypes.EDIT_USER,
});

export {
  handleUserList,
  handleUserListSuccess,
  handleUserListError,
  handleUserSetQuery,
  handleUserCreate,
  handleUserCreateSuccess,
  handleUserCreateError,
  handleUserEdit,
  handleClosePopup,
};
