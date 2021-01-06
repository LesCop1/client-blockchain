import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

type DataType = {
	date: Date;
	description: string[];
	value: number[];
};

type HistoryProps = {
	title: string;
	length: number;
	data: DataType[];
	type: "activity" | "transaction" | "mining";
};

type HistoryItemProps = {
	key: number;
} & DataType;

function HistoryActivityItem(props: HistoryItemProps) {
	return (
		<div key={props.key}>
			<Grid container spacing={1} alignItems="center" style={{ textAlign: "center" }}>
				<Grid item xs={4}>
					<Typography variant="body1" color="textPrimary">
						{props.date.toDateString()}
					</Typography>
				</Grid>
				<Grid item xs={4} className="history_item_description">
					<Typography color="textSecondary">{props.description[0]}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography color="primary">{props.value[0]} $</Typography>
				</Grid>
			</Grid>
			<Divider />
		</div>
	);
}

function HistoryTransactionItem(props: HistoryItemProps) {
	return (
		<div key={props.key}>
			<Grid container spacing={1} alignItems="center" style={{ textAlign: "center" }}>
				<Grid item xs={4}>
					<Typography variant="body1" color="textPrimary">
						{props.date.toDateString()}
					</Typography>
				</Grid>
				<Grid item xs={4} className="history_item_description">
					<Typography color="textSecondary">To : {props.description[0]}</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography color="primary">
						{props.value[0]} $ ➜ {props.value[1]} EC
					</Typography>
				</Grid>
			</Grid>
			<Divider />
		</div>
	);
}

function HistoryMiningItem(props: HistoryItemProps) {
	return (
		<div key={props.key}>
			<Grid container spacing={1} alignItems="center" style={{ textAlign: "center" }}>
				<Grid item xs={3}>
					<Typography variant="body1" color="textPrimary">
						{props.date.toDateString()}
					</Typography>
				</Grid>
				<Grid item xs={3} className="history_item_description">
					<Typography color="textSecondary">Consumption : </Typography>
					<Typography color="primary" display="inline" noWrap>
						{props.description[0]} W
					</Typography>
				</Grid>
				<Grid item xs={3} className="history_item_description">
					<Typography color="textSecondary">Time : </Typography>
					<Typography color="primary" display="inline" noWrap>
						{props.description[1]} min
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography color="primary" noWrap>
						{props.value[0]} $
					</Typography>
				</Grid>
			</Grid>
			<Divider />
		</div>
	);
}

export default function History(props: HistoryProps): JSX.Element {
	function HistoryItems() {
		const maxLength = Math.min(props.data.length, props.length);

		let itemFunction: (props: HistoryItemProps) => JSX.Element;
		switch (props.type) {
			case "activity":
				itemFunction = HistoryActivityItem;
				break;
			case "transaction":
				itemFunction = HistoryTransactionItem;
				break;
			case "mining":
				itemFunction = HistoryMiningItem;
				break;
			default:
				itemFunction = HistoryActivityItem;
				break;
		}

		return props.data.slice(0, maxLength).map((item, i) => {
			return itemFunction({ key: i, ...item });
		});
	}

	return (
		<Paper elevation={12}>
			<Typography align="center" variant="h5" color="textPrimary">
				{props.title}
			</Typography>
			{HistoryItems()}
		</Paper>
	);
}
