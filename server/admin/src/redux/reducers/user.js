import * as actionTypes from '../actionTypes/user';
import { get } from 'lodash';

const initialState = {
  query: {
    search: '',
    pageCurrent: 1,
    pageSize: 2,
  },
  listUser: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.GET_LIST_USER:
      return {
        ...initialState,
        query: action.query,
      };
    case actionTypes.GET_LIST_USER_SUCCESS:
      return {
        ...state,
        listUser: get(action, 'payload.data.user', []),
      };
    case actionTypes.LIST_USER_SET_QUERY:
      return {
        ...initialState,
        query: action.query,
        listUser: get(action, 'payload.data.user', []),
      };
    default: {
      return state;
    }
  }
};
