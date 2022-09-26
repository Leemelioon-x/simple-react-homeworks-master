import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../h5-rrd-v6/Pages";
import MyNavLink from "../h5/components/MyNavLink";
import classes from "./Heder.module.css";

function Header() {
    return (
        <div className={classes.flex}>
            <MyNavLink name={'links>'}/>
        </div>
    )
}

export default Header
