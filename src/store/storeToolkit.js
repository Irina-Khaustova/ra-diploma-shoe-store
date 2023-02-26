import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import basket from './slices/basket';
import catalog from './slices/catalog';
import salesHits from './slices/salesHits';
import saga from '../store/saga/indexToolkit';

const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export default configureStore({
    reducer: {
      catalog: catalog,
      basket: basket,
      salesHits: salesHits,
    },
    middleware
  });

sagaMiddleWare.run(saga);