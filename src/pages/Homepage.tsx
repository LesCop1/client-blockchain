import React from "react";
import ExampleComponent, {TextArea} from "../components/ExampleComponent";
import {Link} from "react-router-dom";

export default class Homepage extends React.Component<void, void> {
    render() {
        let div = <>
            <div>
                <div>Sign up</div>
                <div>
                    <h1>Sign Up</h1>
                    <label>EMAIL</label>
                    <br/>
                    <TextArea text={"Email"} type={"Enter"}/>
                    <br/>
                </div>
                <div>End Homepage</div>
                <br/>
                <Link to="/nowhere">To 404 - NotFound page</Link>
                <br/>
            </div>
        </>;

    }
}
