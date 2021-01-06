/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import Chart from "./Chart";
import Wallet from "./Wallet";
import History from "./History";
import DashboardService from "../services/DashboardService";
import { SuccessResponse } from "../services/APIService";

type GeneralDashboardType = {
	transferBtnCb: () => void;
};

export default function GeneralDashboard(props: GeneralDashboardType): JSX.Element {
	const [info, setInfo] = useState({});
	const [stockPrices, setStockPrices] = useState([]);

	useEffect(() => {
		async function getInfo() {
			const { data } = (await DashboardService.getInfo()) as SuccessResponse;
			// @ts-ignore
			setInfo(data.data);
			// @ts-ignore
			const newStockPrices = [];
			for (let i = 0; i < 20; i++) {
				// @ts-ignore
				if (data.data.stockPrices[i].value) {
					// @ts-ignore
					newStockPrices.push({
						// @ts-ignore
						x: data.data.stockPrices[i].date,
						// @ts-ignore
						y: data.data.stockPrices[i].value,
					});
				}
			}
			// @ts-ignore
			setStockPrices(newStockPrices);
		}
		getInfo();
	}, []);

	const sampleStat = [
		{
			title: "Prix moyen",
			description: "le prix moyen",
			value: "50 EC",
		},
	];

	return (
		<Grid container className="general-dashboard" alignContent="space-around">
			<Grid item sm={6} className="general-dashboard_wallet">
				{/* @ts-ignore */}
				<Wallet moneys={info.user?.balance || { EC: 0, USD: 0 }} transferBtn={props.transferBtnCb} />
			</Grid>
			<Grid item sm={6} className="general-dashboard_history">
				{/* @ts-ignore */}
				<History title="Recent Activities" length={5} data={[]} type="activity" />
			</Grid>
			<Grid item sm={12} className="general-dashboard_chart">
				<Chart
					title="EcoCoin stock prices"
					stats={sampleStat}
					charts={[
						<ResponsiveLine
							key={0}
							data={[
								{
									id: "Stock prices",
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
