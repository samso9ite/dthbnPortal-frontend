import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import indexingSlice from "./indexing-slice";
import examinationSlice from "./examination-slice";

const reducers = combineReducers({
    index: indexingSlice.reducer,
    examination: examinationSlice.reducer
})

export type RootState = ReturnType<typeof reducers>;

const persistConfig = {
    key :'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store