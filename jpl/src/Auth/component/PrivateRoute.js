import React from 'react';
import {Route, Navigate} from 'react-router-dom'

const PrivateRoute = ({...rest}) => {
    const auth = JSON.parse(localStorage.getItem('token'));
    if (auth){
        if (auth.token){
          return <Route {...rest}/>
        }
    }
  return <Navigate to="/signin"/>
};

export default PrivateRoute;
