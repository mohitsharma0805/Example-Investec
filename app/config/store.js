import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '../state';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
});

export { store };
