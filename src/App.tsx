import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import ModifyPassPage from "./pages/ModifyPassPage";
import Validation from "./pages/Validation";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
				<Route exact path="/" component={Homepage as never} />
				<Route exact path="/dashboard" component={Dashboard as never} />
				<Route exact path="/forgotpassword" component={ForgotPassword as never} />
				<Route exact path="/changepassword" component={ModifyPassPage as never} />
				<Route exact path="/validation" component={Validation as never} />
				<Route component={NotFound as never} />
			</Switch>
		</Router>
	);
}

export default App;
