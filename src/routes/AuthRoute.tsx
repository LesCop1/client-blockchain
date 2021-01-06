/* eslint-disable */
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/useAuth";

// @ts-ignore
const AuthRoute = ({ component: Component, ...rest }): JSX.Element => {
	// @ts-ignore
	const { isAuthenticated } = useAuth();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated()) {
					return <Component {...props} />;
				} else {
					return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
				}
			}}
		/>
	);
};

export default AuthRoute;
