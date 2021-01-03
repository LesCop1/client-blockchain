import React, { FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Icone } from "../components/ExampleComponent";

interface State {
	email: string;
	password: string;
	errorMessage: string;
	url: string;
}

export default class SignIn extends React.Component<never, State> {
	constructor(props: never) {
		super(props);

		this.state = {
			email: "",
			password: "",
			errorMessage: "",
			url: "http://..../auth/signup",
		};
	}

	handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		// eslint-disable-next-line no-void
		void axios
			.post(this.state.url, { user })
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
				this.setState({ errorMessage: "Impossible to connect" });
			});
	};

	handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: event.target.value });
	};

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
							<strong>Login</strong>
						</Typography>
						<form onSubmit={this.handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								value={this.state.password}
								onChange={this.handlePasswordChange}
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
								onChange={this.handleEmailChange}
								autoComplete="current-password"
							/>
							<h4 className="error"> {this.state.errorMessage} </h4>
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
