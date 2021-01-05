import React, { Component } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import ModifyPass from "../components/ModifyPass";

export default class ModifyPassPage extends Component<void, void> {
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
					<p>Modify your password</p>
					<ModifyPass />
				</DefaultLayout.RightSide>
			</DefaultLayout.Container>
		);
	}
}
