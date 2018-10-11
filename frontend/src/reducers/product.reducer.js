
const defaultState = {
  productsAll: [],
  productsSnapshot: [],
  product: {},
  loading: false,
  errors: {}
}
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    /**************************
     * fetch all 
    ****************************/
    case 'FETCH_PRODUCTS': {
      return {
        ...state,
        productsAll: action.payload,
        productsSnapshot: action.payload
      }
    }

    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        productsAll: action.payload.data.data || action.payload.data,
        productsSnapshot: action.payload.data.data || action.payload.data
      }
    }

    /**************************
    * search all by name 
    ****************************/
    case 'SEARCH_PRODUCTS': {
      return {
        ...state,
        productsAll: action.payload
      }
    }

    /**************************
    * fetch one 
    ****************************/
    case 'FETCH_PRODUCT_PENDING': {
      return {
        ...state,
        loading: true,
        product: {}
      }
    }

    case 'FETCH_PRODUCT_FULFILLED': {
      return {
        ...state,
        product: action.payload.data,
        errors: {},
        loading: false
      }
    }

    /**************************
    * new 
    ****************************/
    case 'NEW_PRODUCT': {
      return {
        ...state,
        product: {}
      }
    }

    case 'SAVE_PRODUCT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_PRODUCT_FULFILLED': {
      return {
        ...state,
        productsAll: [...state.productsAll, action.payload.data],
        productsSnapshot: [...state.productsAll, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_PRODUCT_REJECTED': {
      const data = action.payload.response.data;
      const { name, code, price } = data.errors;
      const errors = { global: data.message, name, code, price };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    /**************************
    * update  
    ****************************/
    case 'UPDATE_PRODUCT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_PRODUCT_FULFILLED': {
      const product = action.payload.data;
      return {
        ...state,
        productsAll: state.productsAll.fulldata.map(item => item._id === product._id ? product : item),
        productsSnapshot: state.productsAll.fulldata.map(item => item._id === product._id ? product : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_PRODUCT_REJECTED': {
      const data = action.payload.response.data;
      const { name, code, price } = data.errors;
      const errors = { global: data.message, name, code, price };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    /**************************
    * delete  
    ****************************/
    case 'DELETE_PRODUCT': {
      return {
        ...state,
        productsAll: action.payload,
        productsSnapshot: action.payload,
        errors: {},
        loading: false
      }
    }

    default:
      return state;
  }
}