import React from "react";

import Page from "../components/Page";

import BarChartAFMExample from "./components/BarChartAFMExample";
import ColumnChartAFMExample from "./components/ColumnChartAFMExample";
import LineChartAFMExample from "./components/LineChartAFMExample";

const AFMComponents = () => {
    return (
        <Page>
            <div>
                <h1>AFM Components</h1>

                <p>
                    The following components accept measures and attributes, perform the execution, and render
                    data as a chart, table or KPI.
                </p>

                <hr className="separator" />

                <h2 id="bar-chart">Bar chart</h2>
                <BarChartAFMExample />

                <hr className="separator" />

                <h2 id="column-chart">Column chart</h2>
                <ColumnChartAFMExample />

                <hr className="separator" />

                <h2 id="line-chart">Line chart with custom colors</h2>
                <LineChartAFMExample />
            </div>
        </Page>
    );
};

export default AFMComponents;
