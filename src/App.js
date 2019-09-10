import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/Pages/LoginPage";
import DashboardPage from "./components/Pages/DashboardPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import AddWordPage from "./components/WordComponent/AddWordPage";
import EditWordPage from "./components/WordComponent/EditWordPage";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* Public Routes for the application */}
          <PublicRoute exact path="/" component={LoginPage} />
          <PublicRoute path="/login" component={LoginPage} />

          {/* Private Routes for the application */}
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <PrivateRoute path="/addWord" component={AddWordPage} />
          <PrivateRoute path="/editWord/:id" component={EditWordPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
