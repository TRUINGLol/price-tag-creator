import React from "react";
import cl from "../styles/Button.module.css";
import { Link } from "react-router-dom";

//defualt border should be 2px
export default function Button({bgc="white",color="black",borderSet="2px solid black",width=131,height=44,href='/',children}){
    return (
        <div className={cl.button} style={{backgroundColor:bgc, border:borderSet, width:width, height:height}}>
            <Link to={href} style={{color:color}}>{children}</Link>
        </div>
    );
}