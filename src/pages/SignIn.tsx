import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { Icone } from "../components/ExampleComponent";

interface State {
	email: string;
	password: string;
}

export default class SignIn extends React.Component<never, State> {
	constructor(props: never) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	render(): JSX.Element {
		const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ password: event.target.value });
		};
		const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ email: event.target.value });
		};

		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography className="center text_color_main" component="h1" variant="h5">
							<strong>Login</strong>
						</Typography>
						<form noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								value={this.state.password}
								onChange={handlePasswordChange}
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={this.state.email}
								onChange={handleEmailChange}
								autoComplete="current-password"
							/>
							<Button
								style={{
									backgroundColor: "#0f384a",
									color: "#ffffff",
									marginTop: "3%",
									marginBottom: "3%",
									height: "50px",
								}}
								type="submit"
								fullWidth
								variant="contained">
								Login
							</Button>
							<Grid className="center" container>
								<Grid item>
									<Link className="link_fp" component={RouterLink} to="/forgotpassword" variant="body2">
										Forgot password?
									</Link>
									&nbsp;&nbsp;
									<Link className="text_color_link" component={RouterLink} to="/signup" variant="body2">
										Don&apos;t have an account? Sign Up
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
