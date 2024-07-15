import React from "react";
import {Navigate,Route, Routes} from 'react-router-dom'
import {PublicRoute} from './routes'

export default function AppRouter(){
    return (
    <Routes>
        {
            PublicRoute.map((route)=>
                <Route path={route.path} element={route.element}/>
            )
        }
        <Route path="/" element={<Navigate to={'/introduce'}/>}/>
        <Route path="/*" element={<Navigate to={'/404NotFound'} repalce/>}/>
    </Routes>
    );
}