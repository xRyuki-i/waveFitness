// import { createSlice } from "@reduxjs/toolkit";
// import fetchStates from "../store/fetchStates";

// const viewSlice = createSlice({
//     name: 'view',
//     initialState: { display: 'home' },
//     reducers: {
//         fetch(state) {
//             state.status = fetchStates.fetching;
//         },
//         fetch_view_home (state){
//             state.status = fetchStates.success;
//             state.display = "home"
//         },
//         fetch_view_instructor(state) {
//             state.status = fetchStates.success;
//             state.display = "instructor"            
//         },
//         fetch_view_user(state) {
//             state.status = fetchStates.success;
//             state.display = "user"
//         },
//         fetch_view_membership(state){
//             state.status = fetchStates.success;
//             state.display = "membership"
//         }
//     }
// });

// export const viewReducers = viewSlice.actions

// export default viewSlice;