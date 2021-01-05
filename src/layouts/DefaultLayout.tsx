import React, { ReactNode } from "react";
import { Grid, Paper } from "@material-ui/core";

function Container(props: { children: ReactNode }): JSX.Element {
  return (
    <Grid container className="default-layout">
      {props.children}
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
