import{
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_FAILURE,
} from './constants';

export const getProductsStart = () => {
  return {
    type: GET_PRODUCTS_START,
  };
};

export const getProductsSuccess = ( payload ) => {
  console.log('get products success action: ', payload);
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export default {};
