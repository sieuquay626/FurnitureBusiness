import * as actionTypes from '../actionTypes/cart';

const initialState = {
  listToCartProduct: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let temp = [...state.listToCartProduct];
      if (temp.length == 0) {
        temp.push({ product: action.data, amount: 1 });
      } else {
        let repeat = false;
        for (let x of temp) {
          if (x.product._id == action.data._id) {
            x.amount += 1;
            repeat = true;
            break;
          }
        }
        if (!repeat) {
          temp.push({ product: action.data, amount: 1 });
        }
      }
      return {
        ...state,
        listToCartProduct: temp,
      };
    }
    case actionTypes.MINUS_TO_CART: {
      let temp = [...state.listToCartProduct];
      for (let x of temp) {
        if (x.product._id == action.data._id) {
          x.amount -= 1;
          break;
        }
      }
      return {
        ...state,
        listToCartProduct: temp,
      };
    }
    case actionTypes.DELETE_TO_CART: {
      let temp = [...state.listToCartProduct];
      let index;
      temp.filter((item, i) => {
        if (item.product._id != action.data._id) {
          return true;
        } else {
          index = i;
          return false;
        }
      });

      temp = [...temp.slice(0, index), ...temp.slice(index + 1, temp.length)];
      console.log('temp', temp);
      return {
        ...state,
        listToCartProduct: temp,
      };
    }
    default: {
      return state;
    }
  }
};
