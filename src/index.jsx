import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";
import "./layouts/DashboardLayout.scss";
import "./layouts/DefaultLayout.scss";
import "./components/SignIn.scss";
import "./components/SignUp.scss";
import "./components/Wallet.scss";
import "./pages/Homepage.scss";
import "./pages/Dashboard.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
