import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer, PAUSE,FLUSH,PERSIST,PURGE,REGISTER,REHYDRATE } from "redux-persist";
import { AuthSlice } from "./auth/auth.slice";
import { api } from "./api/api";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
}

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: AuthSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: ({
            ignoredActions: [PAUSE,FLUSH,PERSIST,PURGE,REGISTER,REHYDRATE]
        })
    }).concat(api.middleware)
})

export const persistor = persistStore(store)
export type StoreState = ReturnType<typeof store.getState>