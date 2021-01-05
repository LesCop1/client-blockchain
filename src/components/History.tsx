import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

type DataType = {
	date: Date;
	description: string;
	value: number[];
};

type HistoryProps = {
	title: string;
	length: number;
	data: DataType[];
	type: "singleValue" | "doubleValue";
};

type HistoryItemProps = {
	key: number;
} & DataType;

function HistorySingleValueItem(props: HistoryItemProps) {
	return (
		<div key={props.key}>
			<Grid container spacing={1} style={{ textAlign: "center" }}>
				<Grid item xs={4}>
					{props.date.toDateString()}
				</Grid>
				<Grid item xs={4} className="history_item_description">
					{props.description}
				</Grid>
				<Grid item xs={4}>
					{props.value[0]} $
				</Grid>
			</Grid>
			<Divider />
		</div>
	);
}

function HistoryDoubleValueItem(props: HistoryItemProps) {
	return (
		<div key={props.key}>
			<Grid container spacing={1} style={{ textAlign: "center" }}>
				<Grid item xs={4}>
					{props.date.toDateString()}
				</Grid>
				<Grid item xs={4} className="history_item_description">
					<div className="history_item_description_colored">To :</div>
					<div>{props.description}</div>
				</Grid>
				<Grid item xs={4}>
					{props.value[0]} $ ➜ {props.value[1]} EC
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
			case "singleValue":
				itemFunction = HistorySingleValueItem;
				break;
			case "doubleValue":
				itemFunction = HistoryDoubleValueItem;
				break;
			default:
				itemFunction = HistorySingleValueItem;
				break;
		}

		return props.data.slice(0, maxLength).map((item, i) => {
			return itemFunction({ key: i, ...item });
		});
	}

	return (
		<Paper elevation={12}>
			<Typography align="center" variant="h5" className="history_title">
				{props.title}
			</Typography>
			{HistoryItems()}
		</Paper>
	);
}
