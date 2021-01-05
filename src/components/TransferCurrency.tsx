import React, { FormEvent, useState } from "react";
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@material-ui/core";
import { LoadingButton } from "@material-ui/lab";

type TransferCurrencyProps = {
	balance: {
		USD: number;
		EC: number;
	};
};

const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default function TransferCurrency(props: TransferCurrencyProps): JSX.Element {
	const [value, setValue] = useState<number>(0);
	const [currency, setCurrency] = useState<"USD" | "EC">("USD");
	const [email, setEmail] = useState<string>("");
	const [errorMessage, setErrorMessage] = useState<{ value?: string; currency?: string; email?: string }>({});
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		let error = false;

		if (value < 0) {
			error = true;
			setErrorMessage({ value: "Fill in a valid value." });
		} else if (value > props.balance[currency]) {
			error = true;
			setErrorMessage({ value: "You don't have that much." });
		}

		if (!currency) {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				currency: "Select a currency.",
			}));
		}

		if (!email.match(emailValidationRegex)) {
			error = true;
			setErrorMessage((prev) => ({
				...prev,
				email: "Enter a valid email.",
			}));
		}

		if (!error) {
			setLoading(true);
		}
	};

	return (
		<Paper elevation={12}>
			<form className="transfer-currency" noValidate>
				<Typography className="transfer-currency_title" align="center" variant="h5" color="primary">
					Transfer
				</Typography>
				<Grid container spacing={1} alignItems="center" style={{ textAlign: "center" }}>
					<Grid item xs={6} md={3}>
						<TextField
							required
							label="Value"
							type="number"
							InputProps={{ inputProps: { min: 0, step: 0.01 } }}
							variant="outlined"
							size="small"
							fullWidth
							value={value}
							onChange={(e) => {
								setValue(parseFloat(e.target.value));
								setErrorMessage((prev) => ({
									...prev,
									value: undefined,
								}));
							}}
							error={!!errorMessage.value}
							helperText={errorMessage.value && errorMessage.value}
						/>
					</Grid>
					<Grid item xs={6} md={3}>
						<FormControl required variant="outlined" error={!!errorMessage.currency}>
							<InputLabel id="currency-label">Currency</InputLabel>
							<Select
								labelId="currency-label"
								value={currency}
								label="Currency"
								onChange={(e) => {
									setCurrency(e.target.value);
									setErrorMessage((prev) => ({
										...prev,
										currency: undefined,
									}));
								}}
								error={!!errorMessage.currency}>
								<MenuItem value="USD">USD</MenuItem>
								<MenuItem value="EC">EC</MenuItem>
							</Select>
							<FormHelperText>{errorMessage.currency}</FormHelperText>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography>to</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							required
							variant="outlined"
							label="Email"
							type="email"
							size="small"
							fullWidth
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
					</Grid>
					<Grid item xs md>
						<LoadingButton variant="contained" pending={loading} onClick={onSubmit}>
							Transfer
						</LoadingButton>
					</Grid>
				</Grid>
			</form>
		</Paper>
	);
}
