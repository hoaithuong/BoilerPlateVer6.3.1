import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "@gooddata/react-components/styles/css/main.css";

import { ProjectIdProvider } from "../contexts/ProjectId";
import Login from "./Login";
import Logout from "./Logout";
import BasicComponents from "./BasicComponents";
import AFMComponents from "./AFMComponents";
import VisualizationComponents from "./VisualizationComponents";
import AttributeFilter from "./AttributeFilter";
import ExportComponents from "./ExportComponents";
import Drilling from "./Drilling";
import ArithmeticMeasure from "./ArithmeticMeasure";
import TimeOverTimeComparison from "./TimeOverTimeComparison";
import Page from "../components/Page";

import styles from "./AppRouter.module.scss";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* ProjectIdProvider depends on Router so it must be nested */}
                <ProjectIdProvider>
                    <Route exact path="/" component={BasicComponents} />
                    <Route exact path="/afm" component={AFMComponents} />
                    <Route exact path="/visualization" component={VisualizationComponents} />
                    <Route exact path="/arithmetic" component={ArithmeticMeasure} />
                    <Route exact path="/attribute-filter" component={AttributeFilter} />
                    <Route exact path="/time-over" component={TimeOverTimeComparison} />
                    <Route exact path="/drill" component={Drilling} />
                    <Route exact path="/export" component={ExportComponents} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* DELETE THIS LINE  */} <Redirect to="/time-over" />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </ProjectIdProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
