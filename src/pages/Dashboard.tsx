/* eslint-disable */
import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab, MuiThemeProvider } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import DashboardLayout from "../layouts/DashboardLayout";
import TabPanel from "../components/TabPanel";
import GeneralDashboard from "../components/GeneralDashboard";
import TransferDashboard from "../components/TransferDashboard";
import MiningDashboard from "../components/MiningDashboard";
import { theme } from "../layouts/DefaultLayout";
import { useAuth } from "../context/useAuth";

export default function Dashboard(): JSX.Element {
	const [tabIndex, setTabIndex] = useState(0);

	// @ts-ignore
	const { signOut } = useAuth();

	const handleTabChange = (_event: React.ChangeEvent<unknown>, newValue: number): void => {
		setTabIndex(newValue);
	};

	return (
		<MuiThemeProvider theme={theme}>
			<DashboardLayout>
				<AppBar position="static">
					<Tabs variant="fullWidth" value={tabIndex} onChange={handleTabChange}>
						<Tab label="Dashboard" />
						<Tab label="Transfer" />
						<Tab label="Mine" />
						<Tab label="Settings" />
						<Tab label="Help" />
						<Tab label="Contact" />
						<Tab
							icon={<PowerSettingsNewIcon />}
							onClick={() => {
								signOut();
							}}
						/>
					</Tabs>
				</AppBar>
				<SwipeableViews style={{ height: "100%" }} index={tabIndex}>
					<TabPanel value={tabIndex} index={0} fullHeight>
						<GeneralDashboard
							transferBtnCb={() => {
								setTabIndex(1);
							}}
						/>
					</TabPanel>
					<TabPanel value={tabIndex} index={1} fullHeight>
						<TransferDashboard />
					</TabPanel>
					<TabPanel value={tabIndex} index={2} fullHeight>
						<MiningDashboard />
					</TabPanel>
					<TabPanel value={tabIndex} index={3} fullHeight>
						Under construction
					</TabPanel>
					<TabPanel value={tabIndex} index={4} fullHeight>
						Under construction
					</TabPanel>
					<TabPanel value={tabIndex} index={5} fullHeight>
						Under construction
					</TabPanel>
				</SwipeableViews>
			</DashboardLayout>
		</MuiThemeProvider>
	);
}
