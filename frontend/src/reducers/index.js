import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductReducer from './product.reducer';
import PaginationReducer from './pagination.reducer';

const reducers = {
  productStore: ProductReducer,
  paginationStore: PaginationReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;