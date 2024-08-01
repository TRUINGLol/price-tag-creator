import React from "react";
import HalfHeader from "../components/header/HalfHeader";
import img from '../images/introduce/cashier.png';
import cl from './styles/Introduce.module.css';
import Button from '../components/button/Button.jsx';

export default function Introduce(){
    return (
        <div className={cl.introduce}>
            <div className={cl.block1}>
                <img src={img} alt="image"/>
            </div>
            <div className={cl.block2}>
                <div>
                    <HalfHeader/>
                </div>
                <div className={cl.text}>
                    <p className={cl.pM}><span className={cl.spanB}>Создайте впечетляющие ценники</span> для своего бизнеса и медиа</p>
                </div>
                <div className={cl.text}>
                    <p className={cl.pS}>20+ профессиональных заготовок ценников для вашего магазина</p>
                </div>
                <div className={cl.button}>
                    <Button>Инструкция</Button>
                    <Button bgc="#ED8347" borderSet="2px solid #ED8347" color="white">Создать ценник</Button>
                </div>
            </div>
        </div>
    );
}