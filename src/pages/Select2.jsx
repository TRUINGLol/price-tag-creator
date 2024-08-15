import React, { useEffect } from "react";
import cl from "./styles/Select2.module.css";
import Header from "../components/header/Header";

export default function Select2(){
    
    useEffect(()=>{
        document.body.style.backgroundColor = "#ED8347";
    },[]);
    
    return (
        <div>
            <Header/>

            <div className={cl.text}>
                <p>Задайте общие настройки</p>
            </div>
        </div>
    );
}