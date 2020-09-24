// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { LineChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    projectId,
    monthDateIdentifier,
    franchiseFeesIdentifier,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
    locationResortIdentifier,
    totalSalesIdentifier
} from "../utils/fixtures";


import { CUSTOM_COLOR_PALETTE } from "../utils/colors";

const totalSales = Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales");
const measures = [
    Model.measure(franchiseFeesIdentifier).format("#,##0"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
];

const trendBy = Model.attribute(monthDateIdentifier);

export class LineChartExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("LineChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("LineChartExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 300 }} className="s-line-chart">
                <LineChart
                    projectId={projectId}
                    measures={[totalSales]}
                    trendBy={locationResortIdentifier}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    config={{ colorPalette: CUSTOM_COLOR_PALETTE }}
                />
            </div>
        );
    }
}

export default LineChartExample;
