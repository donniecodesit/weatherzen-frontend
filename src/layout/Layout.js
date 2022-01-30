import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import ObservationCreate from "../observations/ObservationCreate";
import ObservationEdit from "../observations/ObservationEdit";

export default function Layout() {
  return (
    <>
      <Header />
      <Menu />
      <div className="container">
        <Switch>
          <Route exact path="/observations/new">
            <ObservationCreate />
          </Route>
          <Route path="/observations/edit/:observationId">
            <ObservationEdit />
          </Route>
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}
