import React from "react";
import { Link } from "react-router-dom";
import ExampleComponent from "../components/ExampleComponent";

export default class Homepage extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div>
				<div>Homepage</div>
				<br />
				<div>Big one</div>
				<ExampleComponent text="ExampleComponent" size="big" />
				<br />
				<div>Small one</div>
				<ExampleComponent text="ExampleComponent" size="small" />
				<br />
				<div>Hidden one</div>
				<ExampleComponent text="ExampleComponent" size="small" hidden />
				<div>End Homepage</div>
				<br />
				<Link to="/nowhere">To 404 - NotFound page</Link>
			</div>
		);
	}
}
