import React, { useEffect } from "react";
import cl from "./styles/MoreTags.module.css";
import Header from "../components/header/Header.jsx";
import Fetch from "../API/Fetch.js";

export default function MoreTags(){
    
    const[data,setData] = useState([]);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        
    },[]);

    return (
        <div className={cl.moreTags}>
            <Header/>
            

        </div>
    );
}