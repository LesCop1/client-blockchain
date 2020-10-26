import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./pages/Homepage";
import test from "./pages/test";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route exact path={"/Test"} component={test}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}



export default App;
