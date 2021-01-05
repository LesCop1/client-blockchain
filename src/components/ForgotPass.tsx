import React, { FormEvent, useState } from "react";
import { CircularProgress, TextField } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

type EmailProps = {
	email?: string;
};

export default function ForgotPass(props: EmailProps): JSX.Element {
	const [email, setEmail] = useState<string>(props.email || "");
	const [errorMessage, setErrorMessage] = useState<{ email?: string }>({});
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		let error = false;

		/* TODO Check if email is in database */

		if (!email.match(emailValidationRegex) || email === "") {
			error = true;
			setErrorMessage({
				email: "Invalid email address.",
			});
		}

		if (!error) {
			setErrorMessage({});
			setLoading(true);
		}
	};
	return (
		<form className="forgot-pass-form">
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Email"
				name="email"
				type="email"
				autoComplete="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
					setErrorMessage((prev) => ({
						...prev,
						email: undefined,
					}));
				}}
				error={!!errorMessage.email}
				helperText={errorMessage.email && errorMessage.email}
				autoFocus
			/>
			<LoadingButton
				className="forgot-pass-form-submit"
				fullWidth
				pending={loading}
				pendingIndicator={<CircularProgress color="primary" size={24} />}
				color="primary"
				variant="contained"
				onClick={handleSubmit}>
				Confirm
			</LoadingButton>
		</form>
	);
}
