import React from "react";
import { Link } from "react-router-dom";
import { Icone } from "../components/ExampleComponent";

export default class ModifyPass extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div className="back">
				<Icone />
				<div className="center">
					<form className="form">
						<div>
							<br />
							<h2 className="center text_color_main">Modifier votre mot de passe : </h2>
						</div>
						<div className="center text_color_main">
							<label htmlFor="Type">
								Mot de passe :
								<br />
								<input size={30} className="shift_input style" type="password" placeholder="•••••••••" required />
							</label>
						</div>

						<div className="center text_color_main">
							<label htmlFor="Type">
								Confirmer le mot de passe :
								<br />
								<input size={30} className="shift_input style" type="password" placeholder="•••••••••" required />
							</label>
						</div>

						<Link className="center" to="/validationcode">
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
