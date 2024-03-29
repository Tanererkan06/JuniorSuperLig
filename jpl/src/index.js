import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
 import "./index.css";
import App from "./App";
import "react-widgets/styles.css";
import store from './redux-new/stores/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider> 
    </BrowserRouter>
 );
