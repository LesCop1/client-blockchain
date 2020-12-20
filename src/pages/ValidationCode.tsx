import React from "react";
import { Link } from "react-router-dom";
import { Icone } from "../components/ExampleComponent";

export default class ValidationCode extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div className="back">
				<Icone />
				<div className="center">
					<form className="form">
						<br />
						<br />
						<div className="center">
							<div className="ui">Un code de vérification vous a été envoyé à l’adresse suivante :</div>
						</div>
						<br />
						<br />
						<div className="center text_color_main">
							<label htmlFor="Type">
								Code :
								<br />
								<input size={30} className="shift_input style" type="Text" placeholder="XXXX" required />
							</label>
						</div>

						<Link className="center" to="/signin">
							<button className="validation" type="submit">
								Valider
							</button>
						</Link>
						<br />
						<br />
					</form>
				</div>
			</div>
		);
	}
}
