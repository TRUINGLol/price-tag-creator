import React from "react";
import cl from "../styles/TagTemplate.module.css";
import { useNavigate } from "react-router-dom";

export default function TagTemplate({width='380px', height='228px', tag}){
    const nav = useNavigate();

    function RouteNext(){
        nav('/select2');
    }
    
    return (
        <div onClick={RouteNext} className={cl.TT} style={{width:width, height:height, cursor:"pointer"}}>
            <div dangerouslySetInnerHTML={{__html:tag}}/>
        </div>
    );
}