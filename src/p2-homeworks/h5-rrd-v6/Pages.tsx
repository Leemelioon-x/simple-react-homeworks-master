import React from 'react'

import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "../h5/pages/PreJunior";
import Error404 from "../h5/pages/Error404";
import Junior from "./pages/Junior";
import {JuniorStrong} from "./pages/JuniorStrong";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_STRONG: '/juniorStrong'
}

function Pages() {
    return (
        <div>
            {/*  Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*    // в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                {/*         // add routes*/}

                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                <Route path={PATH.JUNIOR_STRONG} element={<JuniorStrong/>}/>
                {/*     //  он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
