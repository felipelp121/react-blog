import React from "react";
import {Navigate} from "react-router";
import useAuth from "../actions/userAuth";


export default function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
  }