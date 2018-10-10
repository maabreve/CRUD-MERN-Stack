
const defaultState = {
  search: ""
}
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    
    case 'SET_SEARCH': {
      return {
        ...state,
        search: action.payload
      }
    }

    default:
      return state;
  }
}