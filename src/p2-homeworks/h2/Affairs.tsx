import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (nameButton: FilterType) => {
        props.setFilter(nameButton)
    }

    const setHigh = (nameButton: FilterType) => {
        if (nameButton === "high") {
            props.setFilter(nameButton)
        }

    }

    const setMiddle = (nameButton: FilterType) => {
        if (nameButton === "middle") {
            props.setFilter(nameButton)
        }
    }
    const setLow = (nameButton: FilterType) => {
        if (nameButton === "low") {
            props.setFilter(nameButton)
        }
    }

    return (
        <div>

            {mappedAffairs}
            <SuperButton onClick={() => setAll("all")}>all</SuperButton>
            <SuperButton onClick={() => setAll("high")}>high</SuperButton>
            <SuperButton onClick={() => setAll("middle")}>middle</SuperButton>
            <SuperButton onClick={() => setAll("low")}>low</SuperButton>


            {/*    <button onClick={()=>setAll('all')}>All</button>
            <button onClick={()=>setHigh('high')}>High</button>
            <button onClick={()=>setMiddle('middle')}>Middle</button>
            <button onClick={()=>setLow('low')}>Low</button>*/}


        </div>
    )
}

export default Affairs
