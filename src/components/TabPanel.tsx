import React, { ReactNode } from "react";

type TabPanelProps = {
	children: ReactNode;
	value: number;
	index: number;
};

export default function TabPanel(props: TabPanelProps) {
	const { children, value, index } = props;

	return (
		<div role="tabpanel" hidden={value !== index}>
			{value === index ? children : <></>}
		</div>
	);
}
