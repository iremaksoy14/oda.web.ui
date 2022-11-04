import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';
import * as _redux from "../src/Store/index";

import axios from "axios";
import store, { persistor } from "../src/Store/Store";
import { RoutesPage } from "./RoutesPage";


_redux.setupAxios(axios, store);

export default () => (
        <Provider store={store} >
                <PersistGate persistor={persistor} loading={"Loading"} >
                        <Router basename={process.env.REACT_APP_BASENAME || ""}>
                                <RoutesPage />
                        </Router>
                </PersistGate>
        </Provider>


);
