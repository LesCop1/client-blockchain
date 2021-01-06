import React, { Component } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ForgotPass from "../components/ForgotPass";

export default class ForgotPassword extends Component<{ location: { state: { email?: string } } }, void> {
	render(): JSX.Element {
		return (
			<DefaultLayout.Container>
				<DefaultLayout.LeftSide style={{ backgroundImage: `url(/image/background.jpg)` }}>
					<section className="forgot-password-section">
						<div className="forgot-password-section_body">
							<div className="forgot-password-section_title">Forgot Password?</div>
						</div>
					</section>
					<section className="forgot-password-section">
						<div className="forgot-password-section_body">
							<p className="forgot-password-section_title">Just fill in your email!</p>
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
