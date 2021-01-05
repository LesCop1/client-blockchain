import React, { Component } from "react";
import { Tab, Tabs } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import DefaultLayout from "../layouts/DefaultLayout";
import TabPanel from "../components/TabPanel";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

type HomepageState = {
  tabIndex: number;
};

export default class Homepage extends Component<unknown, HomepageState> {
  constructor(props: unknown) {
    super(props);

    this.state = { tabIndex: 0 };
  }

  handleTabChange = (_event: React.ChangeEvent<unknown>, newValue: number): void => {
    this.setState({ tabIndex: newValue });
  };

  render(): JSX.Element {
    return (
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
          <Tabs value={this.state.tabIndex} onChange={this.handleTabChange} indicatorColor="primary" textColor="primary">
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
          <SwipeableViews index={this.state.tabIndex}>
            <TabPanel value={this.state.tabIndex} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={this.state.tabIndex} index={1}>
              <SignUp />
            </TabPanel>
          </SwipeableViews>
        </DefaultLayout.RightSide>
      </DefaultLayout.Container>
    );
  }
}
