import { client } from '../config/axios';
import Paginator from '../services/paginator.service';

const url = '/products';

// fetch all
export function fetchProducts(_currentPage, _itemsPerPage) {
  return dispatch => {
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
export function searchProducts(name, currentPage, itemsPerPage) {
  return dispatch => {
    dispatch({
      type: 'SEARCH_PRODUCTS',
      payload: { name: name, 
                currentPage: currentPage, 
                itemsPerPage: itemsPerPage }
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
export function deleteProduct(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_PRODUCT',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}

