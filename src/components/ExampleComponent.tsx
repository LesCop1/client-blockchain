import React, { useEffect, useState } from "react";

type ExampleComponentProps = {
	text: string;
	size: "small" | "normal" | "big";
	hidden?: boolean;
};

export default function ExampleComponent(props: ExampleComponentProps): JSX.Element {
	const [tick, setTick] = useState(0);

	useEffect(() => {
		const intervalID = setInterval(() => {
			setTick((prevTick) => {
				return prevTick + 1;
			});
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
	}, []);

	if (props.size === "small") {
		return (
			<div>
				<h3 hidden={props.hidden}>{`${props.text} ${tick}`}</h3>
			</div>
		);
	}
	if (props.size === "normal") {
		return (
			<div>
				<h2 hidden={props.hidden}>{`${props.text} ${tick}`}</h2>
			</div>
		);
	}
	return (
		<div>
			<h1 hidden={props.hidden}>{`${props.text} ${tick}`}</h1>
		</div>
	);
}
