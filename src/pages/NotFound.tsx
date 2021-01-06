import React from "react";
import { Link } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";

export default class NotFound extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<DefaultLayout.Container>
				<DefaultLayout.LeftSide style={{ backgroundImage: `url(/image/background.jpg)` }}>
					<section className="not-found-section">
						<div className="not-found-section_body">
							<div className="not-found-section_title">404</div>
						</div>
					</section>
					<section className="not-found-section">
						<div className="not-found-section_body">
							<p className="not-found-section_title">Lost?</p>
							<p className="not-found-section_text">
								<Link to="/">Go back home!</Link>
							</p>
						</div>
					</section>
				</DefaultLayout.LeftSide>
				<DefaultLayout.RightSide> </DefaultLayout.RightSide>
			</DefaultLayout.Container>
		);
	}
}
