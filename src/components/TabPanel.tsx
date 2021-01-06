import React, { ReactNode } from "react";

type TabPanelProps = {
	children: ReactNode;
	value: number;
	index: number;
	fullHeight?: boolean;
};

export default function TabPanel(props: TabPanelProps): JSX.Element {
	const { children, value, index, fullHeight } = props;

	return (
		<div role="tabpanel" hidden={value !== index} style={fullHeight ? { height: "100%" } : {}}>
			{value === index ? children : <></>}
		</div>
	);
}
