import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import History from "./History";
import Chart from "./Chart";

export default function MiningDashboard(): JSX.Element {
	const thing = [
		{
			title: "jeasis pas",
			description: "moi non plus c ouf",
			value: "20",
		},
		{
			title: "jeasis pas",
			description: "moi non plus c ouf",
			value: "20",
		},
	];

	const history = [
		{
			date: new Date(),
			description: ["32", "23"],
			value: [35.08],
		},
		{
			date: new Date(),
			description: ["245", "32"],
			value: [1.25],
		},
		{
			date: new Date(),
			description: ["54", "756"],
			value: [2.54],
		},
		{
			date: new Date(),
			description: ["21", "264"],
			value: [0.24],
		},
		{
			date: new Date(),
			description: ["101", "21"],
			value: [0.99],
		},
	];

	return (
		<Grid container style={{ padding: 16 }}>
			<Grid item sm={12} container alignItems="center">
				<Grid item sm={6} className="mining-dashboard_chart">
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
				</Grid>
				<Grid item sm={6} className="mining-dashboard_history">
					<History title="Recent Mining" data={history} length={5} type="mining" />
				</Grid>
			</Grid>
			<Grid item sm={12}>
				<div className="mining-dashboard-data">
					<Paper elevation={12} className="mining-dashboard-data_container">
						<div>Data : </div>
						<Button variant="contained">Mine</Button>
					</Paper>
				</div>
			</Grid>
		</Grid>
	);
}
