import React, { useState } from "react";
import { Button, ButtonGroup, Paper } from "@material-ui/core";

type WalletProps = {
	moneys: {
		USD: number;
		EC: number;
	};
	transferBtn?: () => void;
};

export default function Wallet(props: WalletProps): JSX.Element {
	const [currency, setCurrency] = useState<"USD" | "EC">("USD");

	function getCurrentBalance() {
		return String(props.moneys[currency]) + (currency === "USD" ? " $" : " EC");
	}

	return (
		<Paper elevation={12} className="wallet">
			<ButtonGroup variant="contained" color="primary" fullWidth>
				<Button onClick={() => setCurrency("USD")}>USD</Button>
				<Button onClick={() => setCurrency("EC")}>EcoCoins</Button>
			</ButtonGroup>
			<div className="wallet_balance">{getCurrentBalance()}</div>
			{props.transferBtn ? (
				<Button variant="contained" className="transfer-btn" onClick={props.transferBtn}>
					Transfer
				</Button>
			) : (
				<> </>
			)}
		</Paper>
	);
}
