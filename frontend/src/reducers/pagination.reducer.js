const defaultState = {
    currentPage: 2,
    itemsPerPage: 5
}

export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE': {
            console.log('reducer', action.payload)
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case 'SET_CURRENT_PAGE_FULFILLED': {
            return {
                ...state,
                currentPage: action.payload
            }
        }

        case 'SET_ITEMS_PER_PAGE': {
            return {
                ...state,
                itemsPerPage: action.payload
            }
        }

        default:
            return state;
    }
}