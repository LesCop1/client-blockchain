import React, { useState } from "react";
import { MuiThemeProvider, Tab, Tabs } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { Redirect } from "react-router-dom";
import DefaultLayout, { theme } from "../layouts/DefaultLayout";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import TabPanel from "../components/TabPanel";
import { useAuth } from "../context/useAuth";

export default function Homepage(): JSX.Element {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (_event: React.ChangeEvent<unknown>, newValue: number): void => {
		setTabIndex(newValue);
	};

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { isAuthenticated } = useAuth();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	if (isAuthenticated()) {
		return <Redirect to={{ pathname: "/dashboard" }} />;
	}
	return (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		<MuiThemeProvider theme={theme}>
			<DefaultLayout.Container>
				<DefaultLayout.LeftSide style={{ backgroundImage: `url(/image/background.jpg)` }}>
					<section className="homepage-section">
						<div className="homepage-section_body">
							<div className="homepage-section_title">
								Welcome to
								<h1>EcoCoin</h1>
							</div>
						</div>
					</section>
					<section className="homepage-section">
						<div className="homepage-section_body">
							<p className="homepage-section_title">Start now!</p>
							<p className="homepage-section_text">EcoCoin is a cryptocurrency allowing theirs users to mine and trade with ease.</p>
						</div>
					</section>
				</DefaultLayout.LeftSide>
				<DefaultLayout.RightSide>
					<Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
						<Tab label="Sign In" />
						<Tab label="Sign Up" />
					</Tabs>
					<SwipeableViews index={tabIndex}>
						<TabPanel value={tabIndex} index={0}>
							<SignIn />
						</TabPanel>
						<TabPanel value={tabIndex} index={1}>
							<SignUp />
						</TabPanel>
					</SwipeableViews>
				</DefaultLayout.RightSide>
			</DefaultLayout.Container>
		</MuiThemeProvider>
	);
}
