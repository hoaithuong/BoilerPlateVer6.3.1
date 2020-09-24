// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";

import "@gooddata/react-components/styles/css/main.css";
import { totalSalesIdentifier, locationResortIdentifier, projectId } from "../utils/fixtures";
import { AfmComponents } from '@gooddata/react-components';

const { BarChart } = AfmComponents;



export class BarChartAFMExample extends Component {

    render() {
        return (
            <div style={{ height: 300 }} className="s-bar-chart">
                <BarChart
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
                                localIdentifier: 'a1',
                                displayForm: {
                                    identifier: locationResortIdentifier
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

export default BarChartAFMExample;
