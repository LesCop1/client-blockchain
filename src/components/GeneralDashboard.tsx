/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import useWebSocket from "react-use-websocket";
import Chart from "./Chart";
import Wallet from "./Wallet";
import History from "./History";
import DashboardService from "../services/DashboardService";
import { SuccessResponse } from "../services/APIService";
import globals from "../globals";

type GeneralDashboardType = {
	transferBtnCb: () => void;
};

export default function GeneralDashboard(props: GeneralDashboardType): JSX.Element {
	const [info, setInfo] = useState({});
	const [stockPrices, setStockPrices] = useState([{}]);

	const { lastJsonMessage } = useWebSocket(`${globals.WS_URL}/dashboard`);

	useEffect(() => {
		async function getInfo() {
			const { data } = (await DashboardService.getInfo()) as SuccessResponse;
			// @ts-ignore
			setInfo(data);
		}
		getInfo();
	}, []);

	useEffect(() => {
		const newStockPrices = stockPrices.splice(1, 20);
		newStockPrices.push({
			x: lastJsonMessage.date,
			y: lastJsonMessage.price,
		});

		setStockPrices(newStockPrices);
	}, [lastJsonMessage]);

	const thing = [
		{
			title: "yo",
			description: "yoyoyoyo",
			value: "87%",
		},
		{
			title: "bjr",
			description: "je suis du text",
			value: "24mW",
		},
		{
			title: "genial",
			description: "c vrément interessant",
			value: "1min",
		},
		{
			title: "jeasis pas",
			description: "moi non plus c ouf",
			value: "20",
		},
	];

	return (
		<Grid container className="general-dashboard" alignContent="space-around">
			<Grid item sm={6} className="general-dashboard_wallet">
				{/* @ts-ignore */}
				<Wallet moneys={info.balance} transferBtn={props.transferBtnCb} />
			</Grid>
			<Grid item sm={6} className="general-dashboard_history">
				{/* @ts-ignore */}
				<History title="Recent Activities" length={5} data={info.history} type="activity" />
			</Grid>
			<Grid item sm={12} className="general-dashboard_chart">
				<Chart
					title="EcoCoin stats"
					stats={thing}
					charts={[
						<ResponsiveLine
							key={0}
							data={[
								{
									id: "Stock exchange",
									data: stockPrices,
								},
							]}
							margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
							tooltip={({ point }) => {
								return (
									<Paper elevation={4} style={{ padding: 8 }}>
										<Typography align="center" display="inline" variant="subtitle2">
											{point.data.xFormatted} :{" "}
										</Typography>
										<Typography variant="body1" display="inline" color="primary">
											{point.data.yFormatted} EC
										</Typography>
									</Paper>
								);
							}}
							xScale={{
								type: "time",
								format: "%Y-%m-%d %H:%M:%S",
								precision: "second",
							}}
							xFormat="time:%H:%M:%S"
							axisBottom={{
								orient: "bottom",
								format: "%H:%M:%S",
								tickSize: 5,
								tickPadding: 5,
								tickValues: "every 30 second",
								legend: "Date",
								legendOffset: 36,
								legendPosition: "middle",
							}}
							yScale={{
								type: "linear",
								min: "auto",
								max: "auto",
							}}
							axisLeft={{
								orient: "left",
								tickSize: 5,
								tickPadding: 5,
								tickValues: 5,
								legend: "EC",
								legendOffset: -40,
								legendPosition: "middle",
							}}
							useMesh
						/>,
					]}
				/>
			</Grid>
		</Grid>
	);
}
