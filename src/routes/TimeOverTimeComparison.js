// (C) 2007-2020 GoodData Corporation
import React from "react";

import Page from "../components/Page";
import { useProjectId } from "../contexts/ProjectId";

import SamePeriodColumnChartExample from "./components/SamePeriodColumnChartExample";
import PreviousPeriodHeadlineExample from "./components/PreviousPeriodHeadlineExample";
import SamePeriodPivotTableExample from "./components/SamePeriodPivotTableExample";
import SamePeriodBarChartExample from "./components/SamePeriodBarChartExample";
import SamePeriodLineChartExample from "./components/SamePeriodLineChartExample";
import SamePeriodComboChartExample from "./components/SamePeriodComboChartExample";
import SamePeriodHeadLineExample from "./components/SamePeriodHeadLineExample";

const TimeOverTimeComparison = () => {
    const { projectId } = useProjectId();
    return (
        <Page>
            <div>
                <h1>Time Over Time Comparison</h1>
                <p>
                    These examples show how to configure visual components like column charts or headlines to show
                    data compared to the previous period or to the same period of the previous year.
                </p>

                <hr className="separator" />

                <h2>Comparing to the same period previous year in column chart</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-1">
                    <SamePeriodColumnChartExample/>
                </div>

                <hr className="separator" />

                <h2>Comparing to the same period previous year in pivot table</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-2">
                    <SamePeriodPivotTableExample/>
                </div>

                <hr className="separator" />

                <h2>Comparing to the same period previous year in bar chart</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-3">
                    <SamePeriodBarChartExample/>
                </div>

                <hr className="separator" />

                <h2>Comparing to the same period previous year in line chart</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-4">
                    <SamePeriodLineChartExample/>
                </div>

                <hr className="separator" />

                <h2>Comparing to the same period previous year in combo chart</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-5">
                    <SamePeriodComboChartExample/>
                </div>
                <hr className="separator" />

                <h2>Comparing to the same period previous year in head line</h2>
                <div className="s-compare-to-the-same-period-previous-year-example-6">
                    <SamePeriodHeadLineExample/>
                </div>

                <hr className="separator" />

                <h2>Comparing to the previous period in head line</h2>
                <PreviousPeriodHeadlineExample/>
            </div>
        </Page>
    );
};

export default TimeOverTimeComparison;
