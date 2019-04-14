import {
  GET_PRODUCTS_SUCCESS,
} from 'actions/constants';

const INITIAL_STATE = {
  products: [],
  loading: true,
};

const getProductsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...payload],
        loading: false,
      };
    default:
      return state;
  }
}

export default getProductsReducer;
