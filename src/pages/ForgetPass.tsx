import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

import { Icone } from "../components/ExampleComponent";

interface State {
	email: string;
}

export default class ForgetPass extends React.Component<void, State> {
	constructor(props: never) {
		super(props);
		this.state = {
			email: "",
		};
	}

	handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};

	render(): JSX.Element {
		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography className="center text_color_main" component="h1" variant="h5">
							<strong>Forgot your password ?</strong>
						</Typography>
						<form noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Your email"
								name="email"
								value={this.state.email}
								onChange={this.handleEmailChange}
								autoComplete="email"
								autoFocus
							/>

							<Button
								component={RouterLink}
								to="/validation"
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
								Send
							</Button>
							<Grid container className="center">
								<Grid item>
									<Link className="text_color_link" component={RouterLink} to="/signin" variant="body2">
										Have an account? Login
									</Link>
								</Grid>
							</Grid>
						</form>
					</div>
				</div>
			</Container>
		);
	}
}
