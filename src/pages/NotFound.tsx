import React from "react";
import { Link } from "react-router-dom";

export default class NotFound extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<div>
				<div>404 - Not found</div>
				<Link to="/">To Homepage</Link>
			</div>
		);
	}
}
