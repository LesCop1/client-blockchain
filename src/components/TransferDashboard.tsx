import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { ResponsiveLine } from "@nivo/line";
import Chart from "./Chart";
import TransferCurrency from "./TransferCurrency";
import Wallet from "./Wallet";
import History from "./History";

export default function TransferDashboard(): JSX.Element {
	const thing = [
		{
			title: "jeasis pas",
			description: "moi non plus c ouf",
			value: "20",
		},
	];

	const history = [
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [35.08, 95.42],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [33.11, 32.18],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [65.08, 21.48],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [21.83, 108.55],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [1.25, 0.64],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [2.54, 4.65],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [0.24, 1.65],
		},
		{
			date: new Date(),
			description: ["mathisengels@yahoo.fr"],
			value: [0.99, 8.54],
		},
	];

	return (
		<div className="transfer-dashboard_container">
			<div className="transfer-dashboard_left-side">
				<Chart
					title="Titre test"
					stats={thing}
					charts={[
						<ResponsiveLine
							key={0}
							data={[
								{
									id: "stock exchange",
									data: [
										{ x: "2019-05-29 04:00:00", y: 7 },
										{ x: "2019-05-29 04:01:05", y: 5 },
										{ x: "2019-05-29 04:01:23", y: 11 },
										{ x: "2019-05-29 04:02:24", y: 9 },
										{ x: "2019-05-29 04:03:04", y: 13 },
										{ x: "2019-05-29 04:03:45", y: 16 },
										{ x: "2019-05-29 04:03:51", y: 12 },
									],
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
				<Wallet moneys={{ EC: 44, USD: 32 }} />
				<History title="Recent Transactions" length={10} data={history} type="transaction" />
			</div>
		</div>
	);
}
