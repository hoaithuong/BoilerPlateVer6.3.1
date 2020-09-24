// (C) 2007-2020 GoodData Corporation
import React from "react";
import { Link } from "react-router-dom";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import ArithmeticMeasureSumExample from "./components/ArithmeticMeasureSumExample";
import ArithmeticMeasureMultiplicationExample from "./components/ArithmeticMeasureMultiplicationExample";
import ArithmeticMeasureRatioExample from "./components/ArithmeticMeasureRatioExample";
import ArithmeticMeasureChangeExample from "./components/ArithmeticMeasureChangeExample";
import ArithmeticMeasureDrillingExample from "./components/ArithmeticMeasureDrillingExample";

const ArithmeticMeasure = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Arithmetic Measures</h1>
                <p>
                    These examples show how to configure visual components like column charts or headlines to show
                    data calculated on demand with defined arithmetical operations.
                </p>
                <p>
                    Any arithmetic measure is built on top of two measures and given arithmetic operation between
                    them. The base measures can be of any type (including the complex measures, such as{" "}
                    <Link to="/time-over-time-comparison">Time Over Time Comparison</Link> or even another Arithmetic
                    Measure).
                </p>

                <hr className="separator" />

                <h2>Ratio</h2>
                <p>Take two measures and divide them (e.g. gross margin = gross profit / net sales).</p>
                <div className="s-ratio-calculated-example">
                    <ArithmeticMeasureRatioExample/>
                </div>

                <hr className="separator" />

                <h2>Change</h2>
                <p>Calculate percentual change between two measures.</p>

                <p>
                    Note: This example shows how it is possible to use{" "}
                    <Link to="/time-over-time-comparison">Time Over Time Comparison</Link> with Arithmetic Measures to
                    display trend of the given metric.
                </p>
                <div className="s-change-calculated-example">
                    <ArithmeticMeasureChangeExample/>
                </div>

                <hr className="separator" />

                <h2>Sum and difference</h2>
                <p>Add or subtract two measures (e.g. revenue in 2017 - revenue in 2016).</p>
                <div className="s-sum-and-difference-calculated-example">
                    <ArithmeticMeasureSumExample/>
                </div>

                <hr className="separator" />

                <h2>Multiplication</h2>
                <p>Multiply two measures (e.g. price per unit x volume = revenue).</p>
                <div className="s-multiplication-calculated-example">
                    <ArithmeticMeasureMultiplicationExample/>
                </div>

                <hr className="separator" />

                <h2>Arithmetic Measures with Drilling</h2>
                <div className="s-multiplication-calculated-with-drilling-example">
                    <ArithmeticMeasureDrillingExample/>
                </div>
            </div>
        </Page>
    );
};

export default ArithmeticMeasure;
