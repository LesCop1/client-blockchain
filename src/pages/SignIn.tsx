import React from "react";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
							Sign in
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
							<FormControlLabel className="text_color_main" control={<Checkbox value="remember" color="primary" />} label="Remember me" />
							<Button className="validation" type="submit" fullWidth variant="contained">
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link className="link_fp" component={RouterLink} to="/forgotpassword" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link className="text_color_main" component={RouterLink} to="/signup" variant="body2">
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
