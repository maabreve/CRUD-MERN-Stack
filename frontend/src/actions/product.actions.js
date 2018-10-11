import { client } from '../config/axios';
import Paginator from '../services/paginator.service';

const url = '/products';

// fetch all
export function fetchProducts(_currentPage, _itemsPerPage) {
  return (dispatch) => {
    client.get(url).then(products => {
      let _productsPaged = Paginator(products.data, _currentPage, _itemsPerPage);
      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: _productsPaged
      });
    });
  }
}

// fecth by id
export function fetchProduct(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_PRODUCT',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

// search by name
export function searchProducts(name, itemsPerPage) {
  console.log('action itemsperpag', itemsPerPage)
  return (dispatch, getState) => {
    let currentState = getState();
    let productsPaged = []

    if (currentState &&
      currentState.productStore &&
      currentState.productStore.productsSnapshot &&
      currentState.productStore.productsSnapshot.fulldata) {
      if (name === '') {
        productsPaged = Paginator(currentState.productStore.productsSnapshot.fulldata, 1, itemsPerPage);
      } else {

        let searchResult = currentState.productStore.productsSnapshot.fulldata.filter(function (item) {
          return item.name.toLowerCase().search(name.toLowerCase()) !== -1;
        });
        productsPaged = Paginator(searchResult, 1, itemsPerPage);
      }
    }

    dispatch({
      type: 'SEARCH_PRODUCTS',
      payload: productsPaged
    });
  }
}

// new 
export function newProduct() {
  return dispatch => {
    dispatch({
      type: 'NEW_PRODUCT'
    });
  }
}

// save
export function saveProduct(product) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_PRODUCT',
      payload: client.post(url, product)
    });
  }
}

// update
export function updateProduct(product) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_PRODUCT',
      payload: client.put(`${url}`, product)
    })
  }
}

// delete
export function deleteProduct(_id, itemsPerPage = 10) {
  return (dispatch, getState) => {
    let currentState = getState();
    client.delete(`${url}/${_id}`).then(resp => {

      if (currentState &&
        currentState.productStore &&
        currentState.productStore.productsSnapshot &&
        currentState.productStore.productsSnapshot.fulldata) {
        console.log('currentState', currentState)

        currentState.productStore.productsSnapshot.fulldata = currentState.productStore.productsSnapshot.fulldata.filter(item => item._id !== resp.data);
        currentState.productStore.productsSnapshot.data = currentState.productStore.productsSnapshot.data.filter(item => item._id !== resp.data);

        let _productsPaged = Paginator(currentState.productStore.productsSnapshot.fulldata, 1, itemsPerPage);

        dispatch({
          type: 'DELETE_PRODUCT',
          payload: _productsPaged
        });
      }


    });
  }
  // return dispatch => {
  //   return dispatch({
  //     type: 'DELETE_PRODUCT',
  //     payload: client.delete(`${url}/${_id}`)
  //   });
  // }
}

