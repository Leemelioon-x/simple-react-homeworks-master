import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

 export type UsersType =  {_id:number, name: string, age: number}[]
 export type UserType =  {_id:number, name: string, age: number}


export const initialPeople: UsersType= [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix

    // need to fix any
    const finalPeople = people.map((p:UserType) => (
        <div key={p._id}>
            <h3>{p.name}, Age:{p.age}</h3>
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
        console.log(people)
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
        console.log(people)
    }
    const sortAge = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'CHECK', payload: 18}))
        console.log(people)
    }

/*    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))*/

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>sort Age:18</SuperButton></div>
         {/*   <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>*/}
            check 18

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
