import { AnyAction } from "@reduxjs/toolkit";
import React, { Dispatch } from "react";
import { accountReducers } from "../../reducers/account";
import swal from 'sweetalert';

export const loginReq = async (login:object, dispatch:Dispatch<AnyAction>) => {
    try {
        const res = await fetch(`http://localhost:8080/account/login`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        const json = await res.json();
        const status = res.status;

        if (status === 200) {
            dispatch(accountReducers.fetch_success(json));
            swal(`Login successful: ${json.username}`,"", "success");
        }else if (status === 401) {
            console.log(json)
            dispatch(accountReducers.fetch_error(json))
            swal(json.error,"", "error");
        }
        
    } catch (err) {
        return dispatch(accountReducers.fetch_error(err));
    }
}


