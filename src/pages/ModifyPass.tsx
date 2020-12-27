import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";

import { Icone } from "../components/ExampleComponent";

interface State {
	password: string;
	cpassword: string;
}

export default class ModifyPass extends React.Component<never, State> {
	constructor(props: never) {
		super(props);

		this.state = {
			password: "",
			cpassword: "",
		};
	}

	render(): JSX.Element {
		const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ password: event.target.value });
		};

		const handleConfirPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState({ cpassword: event.target.value });
		};

		return (
			<Container className="back" component="main" maxWidth="xl">
				<Icone />
				<div className="center">
					<div className="form">
						<CssBaseline />
						<Typography className="center text_color_main" component="h1" variant="h5">
							<strong>Change your password</strong>
						</Typography>
						<form noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="newpassword"
								label="New password"
								type="password"
								id="newpassword"
								value={this.state.password}
								onChange={handlePasswordChange}
								autoComplete="current-password"
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="confnewpassword"
								label="Confirm the new password"
								type="password"
								id="confnewpassword"
								value={this.state.cpassword}
								onChange={handleConfirPasswordChange}
								autoComplete="current-password"
							/>
							<Button
								component={RouterLink}
								to="/signin"
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
								Save
							</Button>
						</form>
					</div>
				</div>
			</Container>
		);
	}
}
