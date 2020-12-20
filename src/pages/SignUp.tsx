import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

interface State {
	password: string;
}

export default class SignIn extends React.Component<never, State> {
	constructor(props: never) {
		super(props);

		this.state = {
			password: "",
		};
	}

	render(): JSX.Element {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ password: event.target.value });
		};

		// const handleClickShowPassword = () => {
		// 	this.setState((previousState: State) => {
		// 		return { showPassword: !previousState.showPassword };
		// 	});
		// };
		//
		// const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 	event.preventDefault();
		// };

		return (
			<Container className="back" component="main" maxWidth="xl">
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Avatar>
							<LockOutlinedIcon />
						</Avatar>
						<Typography className="center text_color_main" component="h1" variant="h5">
							Sign up
						</Typography>
						<form noValidate>
							<TextField variant="outlined" margin="normal" required fullWidth id="nom" label="Nom" name="nom" autoComplete="nom" autoFocus />
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="prenom"
								label="Prenom"
								name="prenom"
								autoComplete="prenom"
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
								onChange={handleChange}
								autoComplete="current-password"
							/>
							<Button className="validation" type="submit" fullWidth variant="contained">
								Sign Up
							</Button>
							<Grid container>
								<Grid item>
									<Link className="text_color_main" component={RouterLink} to="/signin" variant="body2">
										Have an account? Sign In
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
