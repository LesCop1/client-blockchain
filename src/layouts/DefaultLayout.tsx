import React, { ReactNode } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Toaster } from "react-hot-toast";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#2e4853",
		},
		secondary: {
			main: "#D8D8D8",
		},
	},
});

function Container(props: { children: ReactNode }): JSX.Element {
	return (
		<Grid container className="default-layout">
			{props.children}
			<Toaster position="bottom-center" />
		</Grid>
	);
}

function LeftSide(props: { children: ReactNode; style?: React.CSSProperties }): JSX.Element {
	return (
		<Grid className="default-layout_left-side" style={props.style} item xs={false} sm={4} md={7}>
			{props.children}
		</Grid>
	);
}

function RightSide(props: { children: ReactNode }): JSX.Element {
	return (
		<Grid className="default-layout_right-side" item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
			{props.children}
		</Grid>
	);
}

export default {
	Container,
	LeftSide,
	RightSide,
};
