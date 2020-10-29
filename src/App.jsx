import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
