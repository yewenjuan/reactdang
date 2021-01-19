import React from "react";
import {Switch, Route} from "react-router-dom";

import routeList from "./route_list";

function IndexRoute() {
  return (
    <Switch>
      {
        routeList.map((route, index) => {
          return (
            <Route 
              name={route.name} 
              exact={route.exact} 
              path={route.path}
              render={route.render}
              // component={route.component}
              key={index}
            ></Route>
          )
        })
      }   
      
    </Switch>
  );   
  
}

export default IndexRoute