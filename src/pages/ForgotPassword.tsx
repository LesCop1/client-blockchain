import React, { Component } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ForgotPass from "../components/ForgotPass";

export default class ForgotPassword extends Component<{ location: { state: { email?: string } } }, void> {
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
					<p>Enter email to recover password</p>
					<ForgotPass email={this.props.location.state.email} />
				</DefaultLayout.RightSide>
			</DefaultLayout.Container>
		);
	}
}
