import React from "react";
import cl from "./styles/Select1.module.css";
import Header from "../components/header/Header.jsx";
import TagTemplate from "../components/tagTemplate/TagTemplate.jsx";
import Button from "../components/button/Button.jsx";

export default function Select1(){
    return (
        <div className={cl.select}>
            <Header/>

            <div style={{justifyContent:'center', display:"flex", marginTop:'45px'}}>
                <p className={cl.pM}>Для начала <span>выберете шаблон</span> для ценника</p>
            </div>

            <div className={cl.tags}>
                <TagTemplate/>
                <TagTemplate/>
                <TagTemplate/>
            </div>

            <div className={cl.button}>
                <Button width='200px' bgc="#ED8347" borderSet="2px solid #ED8347" color="white">Увидеть больше</Button>
            </div>
        </div>
    );
}
