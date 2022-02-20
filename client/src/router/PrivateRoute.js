import React from "react";
import { Redirect, Route } from "react-router";


const PrivateRoute = ({ component: Component, ...rest }) => {
  
const token = localStorage.getItem("token");
const email = localStorage.getItem("email")


if ({ ...rest }.path === "/profile") {
    if (!token) {
      return <Redirect to="/login" />;
    }

    return <Route component={Component} {...rest} />;
  }
   else if (email !== "admin@mayway.tn" ) {
    return <Redirect to="/*" />;
  }

  return <Route component={Component} {...rest} />;
}
;



export default PrivateRoute;
