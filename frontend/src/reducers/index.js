import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductReducer from './product.reducer';
import SearchReducer from './search.reducer';
import PaginationReducer from './pagination.reducer';

const reducers = {
  productStore: ProductReducer,
  searchStore: SearchReducer,
  paginationStore: PaginationReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;