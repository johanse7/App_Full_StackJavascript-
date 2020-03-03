export const FETCH_PROCESS_TEXT_REQUEST = 'FETCH_PROCESS_TEXT_REQUEST';
export const FETCH_PROCESS_TEXT_SUCCESS = 'FETCH_PROCESS_TEXT_SUCCESS';
export const FETCH_PROCESS_TEXT_ERROR = 'FETCH_PROCESS_TEXT_ERROR';

export const fetchProcessTokens = () => (dispatch) => {
  dispatch({ type: FETCH_PROCESS_TEXT_REQUEST })

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(textResponse => {
      dispatch({
        type: FETCH_PROCESS_TEXT_SUCCESS,
        payload: textResponse
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