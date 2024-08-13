import React, { useEffect, useState } from "react";
import cl from "./styles/Select1.module.css";
import Header from "../components/header/Header.jsx";
import TagTemplate from "../components/tagTemplate/TagTemplate.jsx";
import Button from "../components/button/Button.jsx";
import Loader from "../components/loader/Loader.jsx";
import Fetch from "../API/Fetch.js";
import Modal from "../components/modal/Modal.jsx";

export default function Select1(){

    const [isLoading, setIsLoading] = useState(false);
    
    const [data,setData] = useState([]);

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        Fetch.fetchTagsByCount(setData,setIsLoading,3);
    },[])

    return (
        <div className={cl.select}>
            <Header/>

            <Modal isVisible={isModalVisible} setVisible={setModalVisible}>
                <p>Ooops... Something went wrong. Try again later!</p>
            </Modal>

            <div style={{justifyContent:'center', display:"flex", marginTop:'45px'}}>
                <p className={cl.pM}>Для начала <span>выберете шаблон</span> для ценника</p>
            </div>

            <div className={cl.tags}>
                {isLoading ? <div style={{display:"flex", justifyContent:'center'}}><Loader/></div> :
                 data.map((tag)=><TagTemplate key={tag.id} tag={tag.tag} setModalVisible={setModalVisible}/>)}
            </div>

            <div className={cl.button}>
                <Button href="/moreTags" width='200px' bgc="#ED8347" borderSet="2px solid #ED8347" color="white">Увидеть больше</Button>
            </div>
        </div>
    );
}
