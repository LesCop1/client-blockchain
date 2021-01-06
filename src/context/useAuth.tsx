/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const authContext = createContext({
	isAuthenticated: () => {},
	signIn: () => {},
	signOut: () => {},
});

function useProviderAuth() {
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		const SIDCookie = Cookies.get("SID");
		let exists = false;

		if (SIDCookie && SIDCookie !== "") {
			exists = true;
		}

		setAuthenticated(exists);
	}, []);

	const isAuthenticated = (): boolean => {
		return authenticated;
	};

	const signIn = () => {
		setAuthenticated(true);
	};

	const signOut = () => {
		setAuthenticated(false);
	};

	return {
		isAuthenticated,
		signIn,
		signOut,
	};
}

export function AuthProvider(props: { children: React.ReactNode }): JSX.Element {
	const auth = useProviderAuth();
	return <authContext.Provider value={auth}>{props.children}</authContext.Provider>;
}

export const useAuth = (): unknown => {
	return useContext(authContext);
};
