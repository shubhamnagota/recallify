import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Spinner } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase";

import * as serviceWorker from "./serviceWorker";
import { startSetWords } from "./actions/words";
import { login, logout } from "./actions/auth";

const store = configureStore();
const history = createHistory();

let appHasRendered = false;
const renderApp = () => {
  if (!appHasRendered) {
    ReactDOM.render(appJsx, document.getElementById("root"));
    appHasRendered = true;
  }
};

const appJsx = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetWords()).then(() => {
      renderApp();
      if (
        history.location.pathname === "/login" ||
        history.location.pathname === "/"
      ) {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    store.dispatch(logout());
    history.push("/");
  }
});

ReactDOM.render(
  <div id="center" style={{ position: "fixed", top: "50%", left: "50%" }}>
    <Spinner color="primary" />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
