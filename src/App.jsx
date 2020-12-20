import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/ForgetPass";
import ValidationCode from "./pages/ValidationCode";
import ModifyPass from "./pages/ModifyPass";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/changepassword" component={ModifyPass} />
				<Route exact path="/validationcode" component={ValidationCode} />
				<Route exact path="/forgotpassword" component={ForgetPass} />
				<Route exact path="/signup" component={SignUp} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
