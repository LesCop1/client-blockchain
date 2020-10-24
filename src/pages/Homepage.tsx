import React from "react";
import ExampleComponent from "../components/ExampleComponent";
import {Link} from "react-router-dom";

export default class Homepage extends React.Component<void, void>{
    render() {
        return (
            <div>
                <div>Homepage</div>
                <br />
                <div>Big one</div>
                <ExampleComponent text={"ExampleComponent"} size={"big"} />
                <br />
                <div>Small one</div>
                <ExampleComponent text={"ExampleComponent"} size={"small"} />
                <br />
                <div>Hidden one</div>
                <ExampleComponent text={"ExampleComponent"} size={"small"} hidden={true} />
                <div>End Homepage</div>
                <br />
                <Link to="/nowhere">To 404 - NotFound page</Link>
            </div>
        )
    }
}
