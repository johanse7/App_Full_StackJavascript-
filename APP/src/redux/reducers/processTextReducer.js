import {
  FETCH_PROCESS_TEXT_SUCCESS,
  FETCH_PROCESS_TEXT_REQUEST,
  FETCH_PROCESS_TEXT_ERROR
} from '../actions/processTextActions';

const initialState = {
  texts: [],
  isFetching: false,
  error: null
};

const processText = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROCESS_TEXT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PROCESS_TEXT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        texts: [ ...state.texts, action.payload]
      };
    case FETCH_PROCESS_TEXT_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default processText;