import React, { useEffect, useState } from "react";
import cl from "../styles/TagTemplate.module.css";
import { useNavigate } from "react-router-dom";
import usePost from "../../API/Post";

export default function TagTemplate({width='380px', height='228px', tag, setModalVisible}){
    const nav = useNavigate();

    const [isSuccess, setSuccess] = useState(false);

    function PostData(){
        usePost(tag,setModalVisible,setSuccess);
    }
    
    useEffect(()=>{
        if(isSuccess){
            nav("/select2");
        }
    },[isSuccess])

    return (
        <div onClick={PostData} className={cl.TT} style={{width:width, height:height, cursor:"pointer"}}>
            <div dangerouslySetInnerHTML={{__html:tag}}/>
        </div>
    );
}