import React, { useEffect,useState } from "react";
import cl from "./styles/MoreTags.module.css";
import Header from "../components/header/Header.jsx";
import Fetch from "../API/Fetch.js";
import Loader from "../components/loader/Loader.jsx";
import TagTemplate from "../components/tagTemplate/TagTemplate.jsx";
import Modal from "../components/modal/Modal.jsx";

export default function MoreTags(){
    
    const[data,setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(()=>{
        Fetch.fetchAllTags(setData,setIsLoading);
    },[]);

    return (
        <div>
            <Header/>

            <Modal isVisible={isModalVisible} setVisible={setModalVisible}>
                <p>Ooops... Something went wrong. Try again later!</p>
            </Modal>

            <div className={cl.text}>
                <p>Все шаблоны</p>
            </div>
            
            {isLoading ?<div style={{display:'flex', justifyContent:'center'}}><Loader/></div> :
                 <div className={cl.moreTags}>{data.map((tag)=><TagTemplate width="295px" height="170px" key={tag.id} tag={tag.tag} setModalVisible={setModalVisible}/>)}</div>}
        </div>
    );
}