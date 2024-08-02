import React from "react";
import cl from '../styles/HalfHeader.module.css';
import { Link } from "react-router-dom";

export default function HalfHeader(){
    return (
        <div className={cl.header}>
            <div>
                <ul className={cl.ul}>
                    <li><Link to="/">Инструкция</Link></li>
                    <li><a href="https://ru.pinterest.com/search/pins/?rs=ac&len=2&q=%D1%86%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B&eq=%D1%86%D0%B5%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8&etslf=1157">Идеи</a></li>
                    <li><Link to="/select1">Создать</Link></li>
                </ul>
            </div>
            <div className={cl.Auth}>
                <Link href="/"><p>Войти</p></Link>
                <Link href="/"><p>Регистрация</p></Link>
            </div>
        </div>
    );
}