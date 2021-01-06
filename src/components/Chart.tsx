import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

type StatType = {
	title: string;
	description: string;
	value: string;
};

type ChartProps = {
	title: string;
	stats: StatType[];
	charts: JSX.Element[];
	statOnBottom?: boolean;
};

function StatItem(key: number, gridSize: 3 | 4 | 6 | 12, title: string, description: string, value: string): JSX.Element {
	return (
		<Grid key={key} item xs sm={gridSize}>
			<div className="chart_stats_item">
				<Typography variant="h6" color="textPrimary">
					{title}
				</Typography>
				<Typography variant="subtitle2" color="textSecondary" paragraph>
					{description}
				</Typography>
				<Typography variant="h4" color="primary">
					{value}
				</Typography>
			</div>
		</Grid>
	);
}

function StatSection(props: { stats: StatType[] }): JSX.Element {
	const quotient = Math.floor(props.stats.length / 4);
	const mod = props.stats.length % 4;

	const render = [];
	for (let i = 0; i < quotient * 4; i += 1) {
		const { title, description, value } = props.stats[i];
		render.push(StatItem(i, 3, title, description, value));
	}

	if (mod) {
		for (let i = 0; i < mod; i += 1) {
			const { title, description, value } = props.stats[quotient * 4 + i];
			render.push(StatItem(quotient * 4 + i, (12 / mod) as 12 | 6 | 4, title, description, value));
		}
	}

	return (
		<Grid container spacing={2}>
			{render}
		</Grid>
	);
}

function ChartItem(key: number, gridSize: 4 | 6 | 12, chart: JSX.Element): JSX.Element {
	return (
		<Grid className="chart_graph_container" key={key} item xs sm={gridSize}>
			{chart}
		</Grid>
	);
}

function ChartSection(props: { charts: JSX.Element[] }): JSX.Element {
	const quotient = Math.floor(props.charts.length / 3);
	const mod = props.charts.length % 3;

	const render = [];
	for (let i = 0; i < quotient * 3; i += 1) {
		render.push(ChartItem(i, 4, props.charts[i]));
	}

	if (mod) {
		for (let i = 0; i < mod; i += 1) {
			render.push(ChartItem(quotient * 3 + i, (12 / mod) as 12 | 6, props.charts[quotient * 3 + i]));
		}
	}

	return (
		<Grid container spacing={2}>
			{render}
		</Grid>
	);
}

export default function Chart(props: ChartProps): JSX.Element {
	if (props.statOnBottom) {
		return (
			<Paper elevation={12}>
				<Typography variant="h4" color="textPrimary">
					{props.title}
				</Typography>
				<ChartSection charts={props.charts} />
				<div className="chart_stats_container">
					<StatSection stats={props.stats} />
				</div>
			</Paper>
		);
	}

	return (
		<Paper elevation={12}>
			<Typography className="chart_title" align="center" variant="h6" color="primary">
				{props.title}
			</Typography>
			<div className="chart_stats_container">
				<StatSection stats={props.stats} />
			</div>
			<ChartSection charts={props.charts} />
		</Paper>
	);
}
