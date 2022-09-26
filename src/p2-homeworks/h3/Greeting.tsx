import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name==='' || name===" " ? s.error  : s.someClass //
    const buttonClass = inputClass===s.error? s.buttonDisabled: s.someClass
    // need to fix with (?:)

    return (
        <div className={s.input_container}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.span_error}>{error}</span>
            <SuperButton className={buttonClass+" "+s.button_style}  onClick={addUser}> Add</SuperButton>

    {/*        <button className={buttonClass+" "+s.button_style} onClick={addUser}>Add</button>*/}
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
