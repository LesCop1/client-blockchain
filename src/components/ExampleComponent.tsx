import React from "react";
import "./index.scss";

type StringAccount = {
	type: "Email" | "Password" | "Nom" | "prenom";
	categorie: "1" | "2" | "3";
};

export default function TextArea(props: StringAccount): JSX.Element {
	// eslint-disable-next-line no-nested-ternary
	return props.type === "Email" ? (
		<div>
			<label htmlFor="Type">
				Email :
				<br />
				<input size={30} className="shift_input style" type="text" placeholder="Example@example.com" required />
			</label>
		</div>
	) : // eslint-disable-next-line no-nested-ternary
	props.type === "Password" ? (
		props.categorie === "1" ? (
			<div>
				<label htmlFor="Type">
					Mot de passe :
					<br />
					<input size={30} className="shift_input style" type="password" placeholder="•••••••••" required />
				</label>
			</div>
		) : (
			<div>
				<label htmlFor="Type">
					Confirmer le mot de passe :
					<br />
					<input size={30} className="shift_input style" type="password" placeholder="•••••••••" required />
				</label>
			</div>
		)
	) : props.type === "prenom" ? (
		<div>
			<label htmlFor="Type">
				Prenom :
				<br />
				<input size={30} className="shift_input style" type="Text" placeholder="André" required />
			</label>
		</div>
	) : (
		<div>
			<label htmlFor="Type">
				Nom :
				<br />
				<input size={30} className="shift_input style" type="Text" placeholder="Jhonson" required />
			</label>
		</div>
	);
}

export function ButtonValidation(): JSX.Element {
	return (
		<button className="validation" type="submit">
			Valider
		</button>
	);
}

export function Icone(): JSX.Element {
	return (
		<div>
			<div className="icone" />
			<div>Ecocoin</div>
		</div>
	);
}
