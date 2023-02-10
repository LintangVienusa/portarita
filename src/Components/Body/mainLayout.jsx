import React from "react";
import MyNav from "./navbar";

export default class Main extends React.Component {
    render() {
        return (
            <>
                <MyNav />
                <div className="content">
                    {this.props.children}
                </div>

            </>
        )
    }
}