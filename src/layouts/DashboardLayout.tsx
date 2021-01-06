import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type PropsType = {
	children: ReactNode;
	class?: string;
};

export default function DashboardLayout(props: PropsType): JSX.Element {
	return (
		<div className={`dashboard-layout ${props.class ? props.class : ""}`}>
			<header className="header">
				<div className="logo">
					<img alt="EcoCoinApp" src="/logo.png" />
				</div>
				<div className="brand-name">EcoCoin</div>
			</header>
			{props.children}
			<Toaster position="bottom-center" />
		</div>
	);
}
