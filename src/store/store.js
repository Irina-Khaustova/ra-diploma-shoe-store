import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainPageCatalogReducer from '../store/redusers/mainPaigeCatalogReducer';
import saga from '../store/saga/index.js';

const reducer = combineReducers({mainPageCatalog: mainPageCatalogReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(saga);

export default store;