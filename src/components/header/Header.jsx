import React from "react";
import cl from '../styles/Header.module.css';
import mcl from '../styles/HalfHeader.module.css';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className={cl.header}>
            <div className={mcl.Auth}>
                <Link to="/"><p>Войти</p></Link>
                <Link to="/"><p>Регистрация</p></Link>
            </div>
        </div>
    );
}