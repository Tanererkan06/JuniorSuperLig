import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";
import "./PrivetRoute.css";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="routeLoader">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivetRoute;
