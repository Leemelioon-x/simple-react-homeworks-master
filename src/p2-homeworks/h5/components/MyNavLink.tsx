import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../h5-rrd-v6/Pages";
import classes from "./MyNavLink.module.css";

type MyNavLinkTypeProps = {
    name: string

}

const MyNavLink = (props: MyNavLinkTypeProps) => {

    const [state, setState] = useState(false)


    const toggleOpen = () => {
        setState(!state)
        console.log(state)
    }

    const render = (state: boolean) => {
        const className = state ? classes.closed : classes.opened;
        return className
    }

    return (
        <div className={classes.flex}>

            <div className={classes.nameNavLink} onClick={toggleOpen}>{props.name}
            </div>
            <div className={classes.foldable}>
                <div className={render(state)}>
                    <NavLink className={classes.navlink} to={PATH.PRE_JUNIOR}>PreJunior </NavLink>
                    <NavLink className={classes.navlink} to={PATH.JUNIOR}>Junior </NavLink>
                    <NavLink className={classes.navlink} to={PATH.JUNIOR_STRONG}>Junior Strong</NavLink>
                </div>
            </div>


        </div>
    );
};

export default MyNavLink;