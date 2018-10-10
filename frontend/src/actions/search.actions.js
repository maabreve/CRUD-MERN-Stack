export function setSearch(word) {
  return dispatch => {
    dispatch({
      type: 'SET_SEARCH',
      payload: word
    });
  }
}

