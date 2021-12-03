import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/frontend/Home";
import MasterLayout from "./layout/admin/MasterLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
