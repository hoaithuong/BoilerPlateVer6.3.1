import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Basic Components
            </NavLink>
            <NavLink to={"/afm"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                AFM Components
            </NavLink>
            <NavLink to={"/visualization"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Visualization Components
            </NavLink>
            <NavLink to={"/arithmetic"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Arithmetic Measure
            </NavLink>
            <NavLink
                to={"/attribute-filter"}
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                Attribute Filter
            </NavLink>
            <NavLink to={"/time-over"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Time Over Time
            </NavLink>
            <NavLink to={"/export"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Export
            </NavLink>
            <NavLink to={"/drill"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Drilling
            </NavLink>
        </>
    );
};

export default Links;
