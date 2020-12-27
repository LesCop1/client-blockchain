import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

import { Icone } from "../components/ExampleComponent";

interface State {
	code: string;
}

export default class Validation extends React.Component<void, State> {
	constructor(props: never) {
		super(props);
		this.state = {
			code: "",
		};
	}

	render(): JSX.Element {
		const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ code: event.target.value });
		};
		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography component="h1" variant="h5">
							<strong className="center text_color_main">A verification code has been sent to you at the following address :</strong>
						</Typography>
						<div className="center">Example@example.com</div>
						<form noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="code"
								label="Code"
								name="code"
								value={this.state.code}
								onChange={handleCodeChange}
								autoComplete="code"
								autoFocus
							/>

							<Button
								component={RouterLink}
								to="/changepassword"
								style={{
									backgroundColor: "#0f384a",
									color: "#ffffff",
									marginTop: "3%",
									marginBottom: "3%",
									height: "50px",
								}}
								className="validation"
								type="submit"
								fullWidth
								variant="contained">
								Change password
							</Button>
						</form>
					</div>
				</div>
			</Container>
		);
	}
}
