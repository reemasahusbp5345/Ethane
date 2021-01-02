import React from "react";
import { DataContext } from "../Context/DataContextProvider";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ Component, ...rest }) => {
  return (
    <DataContext.Consumer>
      {({ isAuth }) => {
        return isAuth ? (
          <Route {...rest} render={(props) => <Component {...props} />} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </DataContext.Consumer>
  );
};
