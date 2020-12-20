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

export default class ForgetPass extends React.Component<void, void> {
	render(): JSX.Element {
		return (
			<Container className="back" component="main" maxWidth="xl">
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Avatar>
							<LockOutlinedIcon />
						</Avatar>
						<Typography className="center text_color_main" component="h1" variant="h5">
							Forgot password ?
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
							<Button className="validation" type="submit" fullWidth variant="contained">
								Valider
							</Button>
							<Grid container>
								<Grid item xs>
									<Link className="link_fp" component={RouterLink} to="/forgotpassword" variant="body2">
										Forgot password?
									</Link>
								</Grid>
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
