import React from 'react'
import {AffairType} from './HW2'
import classes from "./Affair.module.css";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={classes.affair_name} >
             {props.affair.name}

            <SuperButton onClick={deleteCallback}  className={classes.bnt_style}>
                X
            </SuperButton>
       {/*     <button className={classes.bnt_style} onClick={deleteCallback}>X</button>*/}
        </div>
    )
}

export default Affair
