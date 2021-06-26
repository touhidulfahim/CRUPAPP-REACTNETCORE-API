import React from "react";
import EmployeeList from "../components/EmployeeList";
import Home from "../components/Home";
import { Route, Redirect, Switch } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Switch>
        <Route path="/employee" exact component={EmployeeList} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default Body;
