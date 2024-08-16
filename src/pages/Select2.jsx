import React, { useEffect,useState } from "react";
import cl from "./styles/Select2.module.css";
import Header from "../components/header/Header";
import { postForm } from "../API/Post";
import FormButton from "../components/formButton/FormButton";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router-dom";

export default function Select2(){

    const nav = useNavigate();
    
    const [formData, setFormData] = useState();
    const [isVisible, setVisible] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    
    useEffect(()=>{
        document.body.style.backgroundColor = "#ED8347";
    },[]);

    function handleSubmit(e){
        e.preventDefault();
        postForm(formData, setVisible, setSuccess);
        if(isSuccess){
            nav("/select3");
        }
        console.log(formData);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevData=>({
            ...prevData,
            [name]:value
        }));
    }
    
    return (
        <div>
            <Header/>

            <Modal isVisible={isVisible} setVisible={setVisible}>Ooops...Something went wrong... try again later</Modal>

            <div className={cl.text}>
                <p>Задайте общие настройки</p>
            </div>
            

            <div style={{marginTop:"50px"}}>
                <form onSubmit={handleSubmit} className={cl.form}>
                    <input placeholder="Дата" type="text" name="date" className={cl.inputField} onChange={handleChange}/>
                    <input placeholder="Название вашей организации" type="text" name="orga" className={cl.inputField} onChange={handleChange}/>
                    <input placeholder="Страна производства" type="text" name="country" className={cl.inputField} onChange={handleChange}/>
                    <input placeholder="Валюта" type="text" name="currency" className={cl.inputField} onChange={handleChange}/>
                    <FormButton>Подтвердить</FormButton>
                </form>
            </div>
        </div>
    );
}