import * as actionTypes from '../actionTypes/user';
import { get } from 'lodash';

const initialState = {
  types: '',
  check: false,
  data: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CREATE_USER:
      return {
        ...initialState,
        types: 'create_user',
        check: true,
      };
    case actionTypes.EDIT_USER:
      return {
        ...initialState,
        types: 'edit_user',
        check: true,
      };
    case actionTypes.CLOSE_POPUP:
      return {
        ...initialState,
        types: '',
        check: false,
      };
    default: {
      return state;
    }
  }
};
