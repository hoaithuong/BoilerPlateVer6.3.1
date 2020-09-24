// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";

import "@gooddata/react-components/styles/css/main.css";
import { totalSalesIdentifier, monthDateIdentifier, projectId } from "../utils/fixtures";
import { AfmComponents } from '@gooddata/react-components';

const { ColumnChart } = AfmComponents;

export class ColumnChartAFMExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("ColumnChartExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 300 }} className="s-column-chart">
                <ColumnChart
                    projectId={projectId}
                    afm={{
                        measures: [
                            {
                                localIdentifier: 'amount',
                                definition: {
                                    measure: {
                                        item: {
                                            identifier: totalSalesIdentifier // can be referenced from the exported catalog
                                        }
                                    }
                                },
                                alias: 'My Measure'
                            }
                        ],
                        attributes: [
                            {
                                localIdentifier: 'month',
                                displayForm: {
                                    identifier: monthDateIdentifier
                                }
                            }
                        ]
                    }}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default ColumnChartAFMExample;
