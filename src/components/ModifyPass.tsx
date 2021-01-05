import TextField from "@material-ui/core/TextField";
import React, { FormEvent, useState } from "react";
import { LoadingButton } from "@material-ui/lab";
import { CircularProgress } from "@material-ui/core";

export default function ModifyPass(): JSX.Element {
	const [password, setPassword] = useState<string>("");
	const [cpassword, setcPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<{ password?: string; cpassword?: string }>({});
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		let error = false;

		if (!password.match(cpassword)) {
			error = true;
			setErrorMessage({
				cpassword: "Password must match !",
			});
		}

		if (password === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				password: "Fill in a password",
			}));
		}

		if (cpassword === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				cpassword: "Fill in a password",
			}));
		}
		/* TODO Alter database with new Password  */

		if (!error) {
			setErrorMessage({});
			setLoading(true);
		}
	};

	return (
		<form className="modify-pass-form" noValidate>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="newpassword"
				label="New password"
				type="password"
				id="newpassword"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
					setErrorMessage((prev) => ({
						...prev,
						password: undefined,
					}));
				}}
				autoComplete="current-password"
				error={!!errorMessage.password}
				helperText={errorMessage.password && errorMessage.password}
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
				value={cpassword}
				onChange={(e) => {
					setcPassword(e.target.value);
					setErrorMessage((prev) => ({
						...prev,
						cpassword: undefined,
					}));
				}}
				error={!!errorMessage.cpassword}
				helperText={errorMessage.cpassword && errorMessage.cpassword}
			/>
			<LoadingButton
				className="modify-pass-form-submit"
				fullWidth
				pending={loading}
				pendingIndicator={<CircularProgress color="primary" size={24} />}
				color="primary"
				variant="contained"
				onClick={handleSubmit}>
				Save
			</LoadingButton>
		</form>
	);
}
