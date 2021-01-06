/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import Chart from "./Chart";
import TransferCurrency from "./TransferCurrency";
import Wallet from "./Wallet";
import History from "./History";
import DashboardService from "../services/DashboardService";
import { SuccessResponse } from "../services/APIService";

export default function TransferDashboard(): JSX.Element {
	const [info, setInfo] = useState({});
	const [stockPrices, setStockPrices] = useState([]);

	useEffect(() => {
		async function getInfo() {
			const { data } = (await DashboardService.getInfo()) as SuccessResponse;
			// @ts-ignore
			setInfo(data.data);
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
		<div className="transfer-dashboard_container">
			<div className="transfer-dashboard_left-side">
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
				<TransferCurrency balance={{ EC: 32, USD: 44 }} />
			</div>
			<div className="transfer-dashboard_right-side">
				{/* @ts-ignore */}
				<Wallet moneys={info.user?.balance || { EC: 0, USD: 0 }} />
				{/* @ts-ignore */}
				<History title="Recent Transactions" length={10} data={[]} type="transaction" />
			</div>
		</div>
	);
}
