import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={HomePage}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
