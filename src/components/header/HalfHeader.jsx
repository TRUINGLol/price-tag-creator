import React from "react";
import cl from '../styles/HalfHeader.module.css';

export default function HalfHeader(){
    return (
        <div className={cl.header}>
            <div>
                <ul className={cl.ul}>
                    <li><a href="/">Инструкция</a></li>
                    <li><a href="https://ru.pinterest.com/search/pins/?rs=ac&len=2&q=%D1%86%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B&eq=%D1%86%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8&etslf=1157">Идеи</a></li>
                    <li><a href="/select1">Создать</a></li>
                </ul>
            </div>
            <div className={cl.Auth}>
                <a href="/"><p>Войти</p></a>
                <a href="/"><p>Регистрация</p></a>
            </div>
        </div>
    );
}