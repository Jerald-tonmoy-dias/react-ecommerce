import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/frontend/auth/Register";
import Login from "./component/frontend/auth/Login";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
