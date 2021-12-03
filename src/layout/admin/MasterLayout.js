import React from "react";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";
import Navbar from "./Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import routes from "../../routes/routes";
export default function MasterLayout() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Navbar />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div id="layoutSidenav_content">
            <main>
              <Switch>
                {/* getting the all routes and component */}
                {/* by props it is getting all the data inside componet */}
                {routes.map((item, index) => {
                  return (
                    item.component && (
                      <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        name={item.name}
                        render={(props) => {
                          return <item.component {...props} />;
                        }}
                      />
                    )
                  );
                })}
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
