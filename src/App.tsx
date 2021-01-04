import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import ForgetPass from "./pages/ForgetPass";
import ModifyPass from "./pages/ModifyPass";
import Validation from "./pages/Validation";

function App(): JSX.Element {
	return (
		<Router>
			<Switch>
				{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
				<Route exact path="/" component={Homepage as never} />
				<Route exact path="/changepassword" component={ModifyPass as never} />
				<Route exact path="/validation" component={Validation as never} />
				<Route exact path="/forgotpassword" component={ForgetPass as never} />
				<Route component={NotFound as never} />
			</Switch>
		</Router>
	);
}

export default App;
