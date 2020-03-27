import { createStore, combineReducers, Store } from 'redux'
import supplierReducer from './suppliers/reducer';

const reducers = {
  suppliers: supplierReducer
}

const store: Store = createStore(combineReducers(reducers))     
export default store;
