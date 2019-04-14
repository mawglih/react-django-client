import {
  GET_FAILURE,
} from 'actions/constants';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case GET_FAILURE:
      return {
        ...state,
        ...payload.response.data,
      };
    default:
      return state;
  }
};