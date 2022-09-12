import {configureStore} from "@reduxjs/toolkit";
import {babiesAPI} from "./babiesAPI";

export const store = configureStore({
    reducer: {
        [babiesAPI.reducerPath]: babiesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(babiesAPI.middleware)
});