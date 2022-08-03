import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import accountSlice from "../reducers/account";
// import viewSlice from "../reducers/view";

export const store = configureStore({
    reducer:{
        account: accountSlice.reducer,
        // view: viewSlice.reducer
    },
    middleware: [thunk]
});

