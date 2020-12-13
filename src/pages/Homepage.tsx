import React from "react";
import { Link } from "react-router-dom";
import TextArea, { ButtonValidation, Icone } from "../components/ExampleComponent";

export default class Homepage extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div className="back">
				<Icone />
				<div className="center">
					<div className="form">
						<div>
							<br />
							<h1 className="center text_color_main">Se connecter </h1>

							<div className="center text_color_main">
								<TextArea type="Email" categorie="1" />
							</div>

							<div className="center text_color_main">
								<TextArea type="Password" categorie="1" />
							</div>

							<Link className="link_fp" to="/Homepage">
								mot de passe oublié ?
							</Link>
						</div>
						<div className="center">
							<ButtonValidation />
						</div>
						<Link className="center text_color_main" to="/Homepage">
							<strong>S&apos;enregistrer</strong>
						</Link>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}
