import Paginator from '../services/paginator.service';

const defaultState = {
  products: [],
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
        products: action.payload,
        productsSnapshot: action.payload,
      }
    }

    case "FETCH_PRODUCTS_FULFILLED": {
    //  let _productsPaged = Paginator(action.payload.data, state.currentPage, state.itemsPerPage);
    return {
        ...state,
        products: action.payload.data.data || action.payload.data,
        productsSnapshot: action.payload.data.data || action.payload.data,
      }
    }

    /**************************
    * search all by name 
    ****************************/
   case 'SEARCH_PRODUCTS': {
      let searchResult = state.productsSnapshot.filter(function (item) {
        return item.name.toLowerCase().search(action.payload.name.toLowerCase()) !== -1;
      });
      
      let _productsPaged = Paginator(searchResult, action.payload.currentPage, action.payload.itemsPerPage);
      return {
        ...state,
        products: searchResult,
        productsPaged: _productsPaged.data
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
        products: [...state.products, action.payload.data],
        productsSnapshot: [...state.products, action.payload.data],
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
        products: state.products.map(item => item._id === product._id ? product : item),
        productsSnapshot: state.products.map(item => item._id === product._id ? product : item),
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
   case 'DELETE_PRODUCT_FULFILLED': {
      const _id = action.payload.data;
      return {
        ...state,
        products: state.products.filter(item => item._id !== _id),
        productsSnapshot: state.products.filter(item => item._id !== _id),
        errors: {},
        loading: false
      }
    }

    default:
      return state;
  }
}