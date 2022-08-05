import React from "react";
import "../assets/css/charts.css"
import * as d3 from "d3";

export default class Charts extends React.Component {
    data = [
        1,2,3,4,5,6
    ]

    render() {
         return (
         <div className="charts content" id="Charts">
            <h1>Charts</h1>
        </div>)
    }
}