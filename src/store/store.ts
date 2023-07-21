import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './root';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {api} from '../api/rtkApi';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: __DEV__,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(api.middleware),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export default store;
