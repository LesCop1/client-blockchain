import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../components/TabPanel";

export default class Dashboard extends Component<void, { tabIndex: number }> {
	constructor() {
		super();
		this.state = { tabIndex: 0 };
	}

	handleTabChange = (_event: React.ChangeEvent<unknown>, newValue: number): void => {
		this.setState({ tabIndex: newValue });
	};

	render() {
		return (
			<div>
				<AppBar position="static">
					<Tabs
						className="tabsStyle"
						variant="scrollable"
						scrollButtons="auto"
						value={this.state.tabIndex}
						onChange={this.handleTabChange}
						aria-label="nav tabs example">
						<Tab className="tabsStyle" label="Tableau de bord" />
						<Tab className="tabsStyle" label="Acheter / Vendre" />
						<Tab className="tabsStyle" label="Miner" />
						<Tab className="tabsStyle" label="Paramètres" />
						<Tab className="tabsStyle" label="Aide" />
						<Tab className="tabsStyle" label="Contact" />
					</Tabs>
				</AppBar>

				{/* TODO SwipeableTab */}

				<TabPanel value={this.state.tabIndex} index={0}>
					Test
				</TabPanel>
				<TabPanel value={this.state.tabIndex} index={1}>
					Page Two
				</TabPanel>
				<TabPanel value={this.state.tabIndex} index={2}>
					Page Three
				</TabPanel>
			</div>
		);
	}
}
