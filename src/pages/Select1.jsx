import React, { useEffect, useState } from "react";
import cl from "./styles/Select1.module.css";
import Header from "../components/header/Header.jsx";
import TagTemplate from "../components/tagTemplate/TagTemplate.jsx";
import Button from "../components/button/Button.jsx";
import Loader from "../components/loader/Loader.jsx";
import Fetch from "../API/Fetch.js";

export default function Select1(){

    const [isLoading, setIsLoading] = useState(false);
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        Fetch.fetchTagsByCount(setData,setIsLoading,3);
    },[])

    return (
        <div className={cl.select}>
            <Header/>

            <div style={{justifyContent:'center', display:"flex", marginTop:'45px'}}>
                <p className={cl.pM}>Для начала <span>выберете шаблон</span> для ценника</p>
            </div>

            <div className={cl.tags}>
                {isLoading ? <div style={{display:"flex", justifyContent:'center'}}><Loader/></div> :
                 data.map((tag)=><TagTemplate key={tag.id} tag={tag.tag}/>)}
            </div>

            <div className={cl.button}>
                <Button href="/moreTags" width='200px' bgc="#ED8347" borderSet="2px solid #ED8347" color="white">Увидеть больше</Button>
            </div>
        </div>
    );
}
