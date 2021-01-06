import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import AuthRoute from "./routes/AuthRoute";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Homepage as never} />
				<AuthRoute exact path="/dashboard" component={Dashboard as never} />
				<Route exact path="/forgotPassword" component={ForgotPassword as never} />
				<Route component={NotFound as never} />
			</Switch>
		</Router>
	);
}

export default App;
