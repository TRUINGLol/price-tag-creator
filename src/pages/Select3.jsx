import React, { useEffect, useState } from "react";
import cl from "./styles/Select3.module.css";
import Header from "../components/header/Header";
import InputFields from "../components/inputFields/inputFields";
import FormButton from "../components/formButton/FormButton";
import {v4 as uuidv4} from "uuid";

export default function Select3(){
    
    const [formData,setFormData] = useState("");
    const [inputs, setInputs] = useState([
    <InputFields formData={formData} isDelete={false} key={uuidv4()} index={uuidv4()} setFormData={setFormData}/>]);

    useEffect(()=>{
        document.body.style.backgroundColor = "#ED8347";
    },[]);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
    }

    function addInputField(e){
        e.preventDefault();
        setInputs([...inputs, <InputFields formData={formData} isDelete={true} key={uuidv4()} index={uuidv4()} setFormData={setFormData}/>])
    }

    function removeInputField(e){
        e.preventDefault();
        if(inputs.length>1){
            setInputs(inputs.slice(0,-1));
        }
    }

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
                <div>
                    <form onSubmit={handleSubmit}>
                        {
                            inputs
                        }
                        <div className={cl.buttons}>
                            <button style={{border:"2px solid #B7FF8A", color:"#417D1C"}} onClick={addInputField}>Добавить</button>
                            <button style={{border:"2px solid #FF3528", color:"#8D1C15"}} onClick={removeInputField}>Удалить</button>
                        </div>
                        <div className={cl.FormButton}>
                            <FormButton>ПЕЧАТЬ</FormButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}