import Register from "./pages/register";
import Fields from "./pages/fields";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/cadastro">
            <Register />
          </Route>
          <Route path="/areas">
            <Fields />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
