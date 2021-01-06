import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthProvider } from "./context/useAuth";

import "./index.scss";
import "./layouts/DashboardLayout.scss";
import "./layouts/DefaultLayout.scss";
import "./components/Chart.scss";
import "./components/ForgotPass.scss";
import "./components/GeneralDashboard.scss";
import "./components/MiningDashboard.scss";
import "./components/SignIn.scss";
import "./components/SignUp.scss";
import "./components/TransferCurrency.scss";
import "./components/TransferDashboard.scss";
import "./components/Wallet.scss";
import "./pages/Homepage.scss";
import "./pages/Dashboard.scss";
import "./pages/ForgotPassword.scss";
import "./pages/NotFound.scss";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
