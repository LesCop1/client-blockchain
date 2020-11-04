import React from "react";
import TextArea, { ButtonValidation } from "../components/ExampleComponent";

export default class Homepage extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div>
				<div>
					<h1>Se connecter </h1>
					<br />
					<TextArea type="Email" />
					<br />
					<TextArea type="Password" />
				</div>
				<ButtonValidation />
			</div>
		);
	}
}
