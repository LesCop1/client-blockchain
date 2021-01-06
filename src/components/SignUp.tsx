import React, { FormEvent, useState } from "react";
import { CircularProgress, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";
import { DatePicker, LocalizationProvider } from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns";

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function SignUp(): JSX.Element {
	const [firstName, setFirstname] = useState<string>("");
	const [lastName, setLastname] = useState<string>("");
	const [nationality, setNationality] = useState<string>("");
	const [birthDate, setBirthDate] = useState<Date | null>(null);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<{
		firstName?: string;
		lastName?: string;
		nationality?: string;
		birthDate?: string;
		email?: string;
		password?: string;
	}>({});
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		let error = false;

		if (firstName === "") {
			error = true;
			setErrorMessage({ firstName: "Fill in your first name." });
		}

		if (lastName === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				lastName: "Fill in your last name.",
			}));
		}

		if (nationality === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				nationality: "Please select a nationality.",
			}));
		}

		if (!birthDate) {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				birthDate: "Fill in your birth date.",
			}));
		}

		if (!email.match(emailValidationRegex) || email === "") {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				email: "Invalid email address.",
			}));
		}

		if (password.length < 4) {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				password: "Password too short (minimum is 4 characters).",
			}));
		}

		if (!error) {
			console.log("hoi");
			setErrorMessage({});
			setLoading(true);
		}
	};

	return (
		<form className="sign-up-form" noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="First Name"
						type="text"
						autoComplete="fname"
						value={firstName}
						onChange={(e) => {
							setFirstname(e.target.value);
							setErrorMessage((prev) => ({
								...prev,
								firstName: undefined,
							}));
						}}
						error={!!errorMessage.firstName}
						helperText={errorMessage.firstName && errorMessage.firstName}
						autoFocus
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Last Name"
						type="text"
						autoComplete="lname"
						value={lastName}
						onChange={(e) => {
							setLastname(e.target.value);
							setErrorMessage((prev) => ({
								...prev,
								lastName: undefined,
							}));
						}}
						error={!!errorMessage.lastName}
						helperText={errorMessage.lastName && errorMessage.lastName}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<FormControl required variant="outlined" error={!!errorMessage.nationality} fullWidth>
						<InputLabel id="nationality-label">Nationality</InputLabel>
						<Select
							labelId="nationality-label"
							value={nationality}
							onChange={(e) => {
								setNationality(e.target.value);
								setErrorMessage((prev) => ({
									...prev,
									nationality: undefined,
								}));
							}}
							label="Nationality"
							error={!!errorMessage.nationality}>
							<MenuItem value="FR">FR</MenuItem>
						</Select>
						<FormHelperText>{errorMessage.nationality}</FormHelperText>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={6}>
					<LocalizationProvider dateAdapter={DateFnsUtils}>
						<DatePicker
							label="Birth date *"
							value={birthDate}
							onChange={(newVal) => {
								setBirthDate(newVal);
								setErrorMessage((prev) => ({
									...prev,
									birthDate: undefined,
								}));
							}}
							renderInput={(props) => (
								// eslint-disable-next-line react/jsx-props-no-spreading
								<TextField {...props} fullWidth helperText={errorMessage.birthDate && errorMessage.birthDate} error={!!errorMessage.birthDate} />
							)}
						/>
					</LocalizationProvider>
				</Grid>
				<Grid item xs={12} spacing={0}>
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
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						label="Mot de passe"
						name="password"
						type="password"
						autoComplete="current-password"
						value={password}
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
				</Grid>
			</Grid>
			<LoadingButton
				className="sign-up-form-submit"
				type="button"
				fullWidth
				pending={loading}
				pendingIndicator={<CircularProgress color="primary" size={24} />}
				color="primary"
				variant="contained"
				onClick={handleSubmit}>
				Sign Up !
			</LoadingButton>
		</form>
	);
}
