 

import React,{useEffect, useId} from "react";
import { Switch, Route } from "react-router-dom";
import Guard from "./components/AuthGuard/Guard";
import {routes} from "./routes";
import withTracker from "./withTracker";
 
export function RoutesPage() {
  
 const tokenget=()=>{    
        return routes.map((route, index) => {
            return (
            
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={withTracker(props => {
                      return (  
                        <Guard permit={route.permission} url  key={index}>                     
                          <route.layout {...props}>                         
                              <route.component {...props} />                      
                          </route.layout>      
                          </Guard>              
                      );
                    })}
                  />
                
            );
          })
    }
 
   return (
    <Switch>

    {tokenget()}
   
   </Switch>
   );
 }
 