import React, { useState } from "react";
import { Button, ButtonGroup, Paper } from "@material-ui/core";

type WalletProps = {
	moneys: {
		USD: number;
		EC: number;
	};
};

export default function Wallet(props: WalletProps): JSX.Element {
	const [currency, setCurrency] = useState<"USD" | "EC">("USD");

	function getCurrentMoney() {
		return String(props.moneys[currency]) + (currency === "USD" ? "$" : "ec");
	}

	return (
		<Paper elevation={12} className="wallet">
			<ButtonGroup variant="contained" color="primary" fullWidth>
				<Button onClick={() => setCurrency("USD")}>USD</Button>
				<Button onClick={() => setCurrency("EC")}>EcoCoins</Button>
			</ButtonGroup>
			<div className="wallet_money">{getCurrentMoney()}</div>
			<Button variant="contained" className="transfer-btn">
				Transfer
			</Button>
		</Paper>
	);
}
