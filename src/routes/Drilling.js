// (C) 2007-2019 GoodData Corporation
import React from "react";
import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import PivotTableDrillExample from "./components/PivotTableDrillExample";
import VisualizationOnDrillExample from "./components/VisualizationOnDrillExample";
import ArithmeticMeasureDrillingExample from "./components/ArithmeticMeasureDrillingExample";

const DrillingDemo = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Pivot Table Drilling</h1>
                <PivotTableDrillExample/>
            </div>

            <hr className="separator" />

            <div>
                <h1>Visualization Drilling</h1>
                <VisualizationOnDrillExample/>
            </div>

            <hr className="separator" />

            <div>
                <h1>Arithmetic Measure Drilling</h1>
                <ArithmeticMeasureDrillingExample/>
            </div>
        </Page>
    );
};

export default DrillingDemo;
