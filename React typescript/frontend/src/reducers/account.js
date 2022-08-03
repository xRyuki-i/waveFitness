import { createSlice } from "@reduxjs/toolkit";
import fetchStates from "../store/fetchStates";

const accountSlice = createSlice({
    name: 'account',
    initialState: { loggedIn: false },
    reducers: {
        fetch(state) {
            state.status = fetchStates.fetching;
        },
        fetch_error (state, action){
            state.status = fetchStates.error;
            state.message = action.payload;
            state.loggedIn = false;
            state.username = null;
            state.instructor= null;
        },
        fetch_success(state, action) {
            state.message = action.payload.access_token;
            state.status = fetchStates.success;
            state.loggedIn = true;
            state.username = action.payload.username;
            state.instructor = action.payload.instructor;
        },
        // fetch_logout_success(state, action) {
        //     state.status = fetchStates.success;
        //     state.message = action.payload;
        //     state.loggedIn = false;
        // }
        fetch_logout_success(state){
            state.status = fetchStates.success;
            state.loggedIn = false;
            state.username = null;
            state.instructor= null;
        }
    }
});

export const accountReducers = accountSlice.actions

export default accountSlice;