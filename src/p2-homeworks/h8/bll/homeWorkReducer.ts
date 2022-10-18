import {initialPeople, UsersType} from "../HW8";


export const homeWorkReducer = (state: UsersType = initialPeople, action: homeWorkReducerActionTypes): UsersType => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            debugger
            if (action.payload === "up") {
                state.sort((a, b) => (a.name > b.name) ? 1 : -1)
            }

            if (action.payload === "down") {
                state.sort((a, b) => (a.name < b.name) ? 1 : -1)
            }

            return [...state]
        }
        case 'CHECK': {

            return state.filter((el)=>el.age>=action.payload)
        }
        default:
            return state
    }
}

type homeWorkReducerActionTypes = SortUpInitialPeople | CheckInitialPeople | SortDownInitialPeople

type SortUpInitialPeople = {
    type: 'SORT',
    payload: "up"
}
type SortDownInitialPeople = {
    type: 'SORT',
    payload: "down"
}

type CheckInitialPeople  = {
    type: 'CHECK',
    payload: number
}


