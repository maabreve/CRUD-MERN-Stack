// set current page
export function setCurrentPage(currentPage) {
    console.log( 'action', currentPage)
    return dispatch => {
        console.log('vai despachar')
        dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: currentPage
        });
    }
}

// set items per page 
export function setItemsPerPage(itemsPerPage) {
    return dispatch => {
        dispatch({
            type: 'SET_ITEMS_PER_PAGE',
            payload: itemsPerPage
        });
    }
}
