import React, { useEffect, useState } from "react";
import cl from "./styles/Select1.module.css";
import Header from "../components/header/Header.jsx";
import TagTemplate from "../components/tagTemplate/TagTemplate.jsx";
import Button from "../components/button/Button.jsx";
import axios from "axios";
import Loader from "../components/loader/Loader.jsx";

export default function Select1(){

    async function fetchTags(setData,setIsLoading){
        try{
            setIsLoading(true);
            const responce = await axios.get("https://localhost:7056/api/tag?count=3");
            setData(responce.data);        
            setIsLoading(false);
        }
        catch(e){
            setIsLoading(true);
            console.error("Fetch error:", e.message)
        }

    }

    const [isLoading, setIsLoading] = useState(false);
    
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchTags(setData,setIsLoading);
    },[])

    return (
        <div className={cl.select}>
            <Header/>

            <div style={{justifyContent:'center', display:"flex", marginTop:'45px'}}>
                <p className={cl.pM}>Для начала <span>выберете шаблон</span> для ценника</p>
            </div>

            <div className={cl.tags}>
                {isLoading ? <Loader/> : data.map((tag)=><TagTemplate key={tag.id} tag={tag.tag}/>)}
            </div>

            <div className={cl.button}>
                <Button href="/moreTags" width='200px' bgc="#ED8347" borderSet="2px solid #ED8347" color="white">Увидеть больше</Button>
            </div>
        </div>
    );
}
