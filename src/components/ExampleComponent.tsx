import Button from "@material-ui/core/Button/Button";
import React from "react";
import "./Button.scss";

type StringAccount = {
	type: "Email" | "Password";
};

export default function TextArea(props: StringAccount): JSX.Element {
	return props.type === "Email" ? (
		<div>
			<label htmlFor="Type">
				Email :
				<br />
				<input type="text" placeholder="patrickxx@example.com" required />
			</label>
		</div>
	) : (
		<div>
			<label htmlFor="Type">
				Mot de passe :
				<br />
				<input type="text" placeholder="**********" required />
			</label>
		</div>
	);
}

export function ButtonValidation(): JSX.Element {
	return (
		<Button className="validation" variant="contained" href="#contained-buttons">
			Valider
		</Button>
	);
}
