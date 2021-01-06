import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { MuiThemeProvider } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import TabPanel from "../components/TabPanel";
import { theme } from "../layouts/DefaultLayout";
import DashboardLayout from "../layouts/DashboardLayout";

export default class Dashboard extends Component<void, { tabIndex: number }> {
	constructor() {
		super();
		this.state = { tabIndex: 0 };
	}

	handleTabChange = (_event: React.ChangeEvent<unknown>, newValue: number): void => {
		this.setState({ tabIndex: newValue });
	};

	render(): JSX.Element {
		return (
			<MuiThemeProvider theme={theme}>
				<DashboardLayout>
					<AppBar position="static">
						<Tabs
							className="tabsStyle"
							variant="fullWidth"
							scrollButtons="auto"
							value={this.state.tabIndex}
							color="secondary"
							indicatorColor="secondary"
							onChange={this.handleTabChange}>
							<Tab className="tabStyle" label="Tableau de bord" />
							<Tab className="tabStyle" label="Acheter / Vendre" />
							<Tab className="tabStyle" label="Miner" />
							<Tab className="tabStyle" label="Paramètres" />
							<Tab className="tabStyle" label="Aide" />
							<Tab className="tabStyle" label="Contact" />
							{/* TODO disconnect action */}
							<Tab className="tabStyle" icon={<PowerSettingsNewIcon />} />
						</Tabs>
					</AppBar>

					<SwipeableViews index={this.state.tabIndex}>
						<TabPanel value={this.state.tabIndex} index={0}>
							Test
						</TabPanel>
						<TabPanel value={this.state.tabIndex} index={1}>
							Page Two
						</TabPanel>
						<TabPanel value={this.state.tabIndex} index={2}>
							Page Three
						</TabPanel>
					</SwipeableViews>
				</DashboardLayout>
			</MuiThemeProvider>
		);
	}
}
