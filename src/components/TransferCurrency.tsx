import React, { useState } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

export default function TransferCurrency(): JSX.Element {
	const [money, setMoney] = useState(0);
	const [ecocoin, setEcocoin] = useState(0);
	const [contact, setContact] = useState("");

	const handleMoneyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMoney(parseFloat(event.target.value));
	};

	const handleEcocoinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEcocoin(parseFloat(event.target.value));
	};

	const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContact(event.target.value);
	};

	return (
		<form>
			<strong className="text_color_main center">Transfert EcoCoin</strong>
			<Grid container spacing={3} alignItems="center">
				<Grid item xs>
					<TextField
						variant="outlined"
						margin="normal"
						required
						name="money"
						label="Money"
						type="number"
						id="money"
						InputProps={{ inputProps: { min: 0, step: 0.01 } }}
						value={money}
						onChange={handleMoneyChange}
						autoComplete="money"
						size="small"
						fullWidth
					/>
				</Grid>
				<strong className="text_color_main">to</strong>
				<Grid item xs>
					<TextField
						variant="outlined"
						margin="normal"
						required
						name="Ecocoin"
						label="Ecocoin"
						type="number"
						InputProps={{ inputProps: { min: 0, step: 0.01 } }}
						id="ecocoin"
						value={ecocoin}
						onChange={handleEcocoinChange}
						autoComplete="ecocoin"
						size="small"
						fullWidth
					/>
				</Grid>
				<strong className="text_color_main">with</strong>
				<Grid item xs>
					<TextField
						variant="outlined"
						margin="normal"
						required
						name="contact"
						label="Contact"
						type="text"
						id="contact"
						value={contact}
						onChange={handleContactChange}
						autoComplete="contact"
						size="small"
						fullWidth
					/>
				</Grid>
				<Grid item xs>
					<Button
						style={{
							backgroundColor: "#0f384a",
							color: "#ffffff",
							height: "50px",
							width: "100%",
							marginTop: "7px",
						}}
						type="submit"
						variant="contained">
						Buy Ecocoin
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
