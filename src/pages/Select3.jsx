import React, { useEffect } from "react";
import cl from "./styles/Select3.module.css";
import Header from "../components/header/Header";

export default function Select3(){
    
    useEffect(()=>{
        document.body.style.backgroundColor = "#ED8347";
    },[]);
    
    return (
        <div>
            <Header/>

            <div className={cl.text}>
                <p><span>Добавьте</span> товары в список товаров</p>
            </div>

            <div>
                <li className={cl.info}>
                    <ul style={{width:"381px"}}>Наименование товара</ul>
                    <ul>Ед.Изм.</ul>
                    <ul>Код товара</ul>
                    <ul style={{width:"140px"}}>Цена</ul>
                    <ul style={{width:"140px"}}>Старая цена</ul>
                    <ul>Страна производитель</ul>
                    <ul>Кол-во</ul>
                </li>
            </div>
        </div>
    );
}