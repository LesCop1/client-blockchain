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
// import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/core/styles";

interface State {
	name: string;
	firstname: string;
	email: string;
	birthday: string;
	password: string;
}
/*
const useStyles = makeStyles((theme) => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
}));
*/
export default class SignUp extends React.Component<never, State> {
	constructor(props: never) {
		super(props);
		this.state = {
			name: "",
			firstname: "",
			email: "",
			birthday: "2017-05-24",
			password: "",
		};
	}

	render(): JSX.Element {
		// const { classes } = this.props;

		const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ name: event.target.value });
		};
		const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ firstname: event.target.value });
		};
		const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ email: event.target.value });
		};
		const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ birthday: event.target.value });
		};
		const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ password: event.target.value });
		};

		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography className="center text_color_main" component="h1" variant="h5">
							<strong>Sign up</strong>
						</Typography>
						<form noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								value={this.state.name}
								onChange={handleNameChange}
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
								onChange={handleFirstnameChange}
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
								onChange={handleBirthdayChange}
								// className={classes.textField}
								autoComplete="date"
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
								onChange={handleEmailChange}
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
								onChange={handlePasswordChange}
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

// export default withStyles(styles)(SignUp);
