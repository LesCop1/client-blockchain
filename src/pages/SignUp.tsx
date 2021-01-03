import React, { FormEvent } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { Icone } from "../components/ExampleComponent";

interface State {
	name: string;
	firstname: string;
	email: string;
	nationality: string;
	birthday: string;
	password: string;
	errorMessage: string;
	url: string;
}

export default class SignUp extends React.Component<never, State> {
	constructor(props: never) {
		super(props);

		this.state = {
			name: "",
			firstname: "",
			email: "",
			nationality: "",
			birthday: "2017-05-24",
			password: "",
			errorMessage: "",
			url: "http://..../auth/signup",
		};
	}

	handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const user = {
			name: this.state.name,
			firstname: this.state.firstname,
			email: this.state.email,
			nationality: this.state.nationality,
			birthday: this.state.birthday,
			password: this.state.password,
		};
		if (this.state.password.length < 6) {
			this.setState({ errorMessage: "password too short" });
		} else {
			this.setState({ errorMessage: "" });
			// eslint-disable-next-line no-void
			void axios
				.post(this.state.url, { user })
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
					this.setState({ errorMessage: "Impossible to sign up" });
				});
		}
	};

	handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ name: event.target.value });
	};

	handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ firstname: event.target.value });
	};

	handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ email: event.target.value });
	};

	handleNationalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ nationality: event.target.value });
	};

	handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ birthday: event.target.value });
	};

	handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ password: event.target.value });
	};

	render(): JSX.Element {
		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography className="center text_color_main" component="h1" variant="h5">
							<strong>Sign up</strong>
						</Typography>
						<form onSubmit={this.handleSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								value={this.state.name}
								onChange={this.handleNameChange}
								autoComplete="name"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="firstname"
								label="Firstname"
								name="firstname"
								value={this.state.firstname}
								onChange={this.handleFirstnameChange}
								autoComplete="firstname"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="date"
								label="Birthday"
								type="date"
								value={this.state.birthday}
								onChange={this.handleBirthdayChange}
								autoComplete="date"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="nationality"
								label="Nationality"
								name="nationality"
								value={this.state.nationality}
								onChange={this.handleNationalityChange}
								autoComplete="nationality"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								value={this.state.email}
								onChange={this.handleEmailChange}
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
								value={this.state.password}
								onChange={this.handlePasswordChange}
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
								className="validation"
								type="submit"
								fullWidth
								variant="contained">
								Sign Up
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
