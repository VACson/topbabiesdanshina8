import { configureStore } from '@reduxjs/toolkit';
import { babiesAPI } from './babiesAPI';
import babiesTop from './babiesTopTest/babiesTop';

export const store = configureStore({
  reducer: {
    [babiesAPI.reducerPath]: babiesAPI.reducer,
    babiesTop,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(babiesAPI.middleware),
});
