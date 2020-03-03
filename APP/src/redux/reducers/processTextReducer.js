import {
  FETCH_PROCESS_TEXT_SUCCESS,
  FETCH_PROCESS_TEXT_REQUEST,
  FETCH_PROCESS_TEXT_ERROR
} from '../actions/processTextActions';

const initialState = {
  texts: ["s simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,", "Es un hecho establecido hace demasiado tiempo que un lector se distraerá ","s simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,", "Es un hecho establecido hace demasiado tiempo que un lector se distraerá "],
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
        texts: action.payload
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