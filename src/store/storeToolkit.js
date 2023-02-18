//import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import basket from './slices/basket';
import catalog from './slices/catalog';
import menuSearch from './slices/menuSearch';
import salesHits from './slices/salesHits';
import saga from '../store/saga/indexToolkit';

//const reducer = combineReducers({mainPageCatalog: mainPageCatalogReducer});
const sagaMiddleWare = createSagaMiddleware()
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
//const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));
export default configureStore({
    reducer: {
      catalog: catalog,
      basket: basket,
      menuSearch: menuSearch,
      salesHits: salesHits,
    },
    middleware
  });

sagaMiddleWare.run(saga);