import config  from '../../config';

export const FETCH_PROCESS_TEXT_REQUEST = 'FETCH_PROCESS_TEXT_REQUEST';
export const FETCH_PROCESS_TEXT_SUCCESS = 'FETCH_PROCESS_TEXT_SUCCESS';
export const FETCH_PROCESS_TEXT_ERROR = 'FETCH_PROCESS_TEXT_ERROR';

export const fetchProcessText = (text) => (dispatch) => {
  dispatch({ type: FETCH_PROCESS_TEXT_REQUEST })

  fetch(`${config.urpApi}api/processText/${text}`)
    .then(res => res.json())
    .then(({text}) => {
      dispatch({
        type: FETCH_PROCESS_TEXT_SUCCESS,
        payload: text
      })
    })
    .catch(error => {
      console.error(error.toString())
      dispatch({
        type: FETCH_PROCESS_TEXT_ERROR,
        error: 'Ha ocurrido un error, por favor intente de nuevo'
      })
    })
};