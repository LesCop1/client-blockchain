import React, {useEffect, useState} from "react";

type ExampleComponentProps = {
    text: string,
    size: "small" | "normal" | "big",
    hidden?: boolean,
}

export default function ExampleComponent(props: ExampleComponentProps) {
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTick((prevTick) => {
                return prevTick + 1;
            })
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);


    return (
        <div>
            {
                props.size === "small" ?
                    <h3 hidden={props.hidden}>{props.text + " " + tick}</h3>
                    :
                    props.size === "normal" ?
                        <h2 hidden={props.hidden}>{props.text + " " + tick}</h2>
                        :
                        <h1 hidden={props.hidden}>{props.text + " " + tick}</h1>
            }
        </div>
    )
}
