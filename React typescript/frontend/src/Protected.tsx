import React from "react";
import { Navigate, Outlet, Route } from "react-router";

export const PrivateRoute = ({auth}:{auth:any}) => {
    return auth ? <Outlet /> : <Navigate to="/" />;
};