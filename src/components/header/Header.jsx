import React from "react";
import cl from '../styles/Header.module.css';
import mcl from '../styles/HalfHeader.module.css';

export default function Header(){
    return (
        <div className={cl.header}>
            <div className={mcl.Auth}>
                <a href="/"><p>Войти</p></a>
                <a href="/"><p>Регистрация</p></a>
            </div>
        </div>
    );
}