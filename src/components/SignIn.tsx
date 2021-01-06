import React, { FormEvent, useState } from "react";
import { CircularProgress, TextField } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthService from "../services/AuthService";
import { ErrorResponse } from "../services/APIService";
import { useAuth } from "../context/useAuth";

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function SignIn(): JSX.Element {
	const history = useHistory();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<{ email?: string; password?: string }>({});
	const [loading, setLoading] = useState<boolean>(false);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { signIn } = useAuth();

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();
		let error = false;

		if (!email.match(emailValidationRegex) || email === "") {
			error = true;
			setErrorMessage({
				email: "Invalid email address.",
			});
		}

		if (password === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				password: "Fill in a password.",
			}));
		}

		if (!error) {
			setErrorMessage({});
			setLoading(true);
			const loadingToast = toast.loading("Loading...");

			const res = await AuthService.signIn(email, password);

			setLoading(false);
			if (res.success) {
				toast.success("Logged In!", {
					id: loadingToast,
				});
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call
				signIn();
				history.push("/dashboard");
			} else {
				const errRes = res as ErrorResponse;
				// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
				toast.error(`${errRes.code} | ${errRes.error.message}`, {
					id: loadingToast,
				});
			}
		}
	};

	return (
		<form className="sign-in-form" noValidate>
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
				color="primary"
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
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				label="Password"
				name="password"
				type="password"
				autoComplete="current-password"
				value={password}
				color="primary"
				onChange={(e) => {
					setPassword(e.target.value);
					setErrorMessage((prev) => ({
						...prev,
						password: undefined,
					}));
				}}
				error={!!errorMessage.password}
				helperText={errorMessage.password && errorMessage.password}
			/>
			<LoadingButton
				className="sign-in-form-submit"
				fullWidth
				pending={loading}
				pendingIndicator={<CircularProgress color="primary" size={24} />}
				color="primary"
				variant="contained"
				onClick={handleSubmit}>
				Sign In !
			</LoadingButton>
			<Link
				to={{
					pathname: "/forgotPassword",
					state: {
						email,
					},
				}}>
				Forgot password ?
			</Link>
		</form>
	);
}
