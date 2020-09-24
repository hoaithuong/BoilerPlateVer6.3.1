// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { AfmComponents } from '@gooddata/react-components';
import {
    projectId,
    monthDateIdentifier,
    franchiseFeesIdentifier,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
} from "../utils/fixtures";


import { CUSTOM_COLOR_PALETTE } from "../utils/colors";

const { LineChart } = AfmComponents;

export class LineChartAFMExample extends Component {
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
                    afm={{
                        measures: [
                            {
                                localIdentifier: 'franchiseFeesIdentifier',
                                definition: {
                                    measure: {
                                        item: {
                                            identifier: franchiseFeesIdentifier // can be referenced from the exported catalog
                                        }
                                    }
                                },
                                alias: 'My franchiseFeesIdentifier'
                            },
                            {
                                localIdentifier: 'franchiseFeesAdRoyaltyIdentifier',
                                definition: {
                                    measure: {
                                        item: {
                                            identifier: franchiseFeesAdRoyaltyIdentifier // can be referenced from the exported catalog
                                        }
                                    }
                                },
                                alias: 'My franchiseFeesAdRoyaltyIdentifier'
                            },
                            {
                                localIdentifier: 'franchiseFeesInitialFranchiseFeeIdentifier',
                                definition: {
                                    measure: {
                                        item: {
                                            identifier: franchiseFeesInitialFranchiseFeeIdentifier // can be referenced from the exported catalog
                                        }
                                    }
                                },
                                alias: 'My franchiseFeesInitialFranchiseFeeIdentifier'
                            },
                            {
                                localIdentifier: 'franchiseFeesIdentifierOngoingRoyalty',
                                definition: {
                                    measure: {
                                        item: {
                                            identifier: franchiseFeesIdentifierOngoingRoyalty // can be referenced from the exported catalog
                                        }
                                    }
                                },
                                alias: 'My franchiseFeesIdentifierOngoingRoyalty'
                            }
                        ],
                        attributes: [
                            {
                                localIdentifier: 'a1',
                                displayForm: {
                                    identifier: monthDateIdentifier
                                }
                            }
                        ]
                    }}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    config={{ colorPalette: CUSTOM_COLOR_PALETTE }}
                />
            </div>
        );
    }
}

export default LineChartAFMExample;
