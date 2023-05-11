import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";


export function PrivateRoute({ roles, children, ...rest }) {
    const {isLogedIn,doLogin} = useAuth();
    
    if(!roles) return(
        <Route {...rest}>
        {isLogedIn() ?  children : doLogin }
        </Route>
    );
    
    return (
    <Route {...rest}>
        {isLogedIn() ? children : doLogin }
    </Route>
    );
}