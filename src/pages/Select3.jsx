import React, { useEffect, useState } from "react";
import cl from "./styles/Select3.module.css";
import Header from "../components/header/Header";
import InputFields from "../components/inputFields/inputFields";
import FormButton from "../components/formButton/FormButton";
import { postProductsData } from "../API/Post";
import {v4 as uuidv4} from "uuid";
import Modal from "../components/modal/Modal";
import { useNavigate } from "react-router-dom";

export default function Select3(){
    const nav = useNavigate();
    
    const [formData,setFormData] = useState("");
    const [inputs, setInputs] = useState([
    <InputFields key={uuidv4()} index={uuidv4()} setFormData={setFormData}/>]);
    
    const [isVisible,setVisible] = useState(false);
    const [isSuccess,setSuccess] = useState(false);

    useEffect(()=>{
        document.body.style.backgroundColor = "#ED8347";
    },[]);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData);
        if(Object.keys(formData).length === 0){
            setVisible(true);
        }
        else{
            postProductsData(formData,setVisible,setSuccess);
            if(isSuccess){
                nav("/file");
            }
        }
    }

    function addInputField(e){
        e.preventDefault();
        setInputs([...inputs, <InputFields key={uuidv4()} index={uuidv4()} setFormData={setFormData}/>])
    }

    function removeInputField(e){
        e.preventDefault();

        let LastUuid = null;

        const changedInputsLastProps = [inputs.map((obj,index)=>{
            if(index === inputs.length - 1){
                //get last element uuid
                LastUuid = obj.props.index;
                return {
                    ...obj,
                    props:{
                        ...obj.props,
                        isDelete:true
                    },
                };
            }
            else{
                return obj;
            }
        })]
        setInputs(changedInputsLastProps);

        deleteData(LastUuid);

        if(inputs.length>1){
            setInputs(inputs.slice(0,-1));
        }
    }

    function deleteData(LastUuid){
        if(Object.keys(formData).length !== 0){
            let propsName = Object.getOwnPropertyNames(formData).filter((prop)=>prop.includes(LastUuid));
            let newProps = Object.fromEntries(Object.entries(formData).filter(([key])=>!propsName.includes(key)));
            setFormData(newProps);
        }
    }

    return (
        <div>
            <Header/>

            <Modal isVisible={isVisible}  setVisible={setVisible}>
                Ooops...Something went wrong... try again later or change form field
            </Modal>

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