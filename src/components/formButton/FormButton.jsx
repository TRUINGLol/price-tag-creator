import React from "react";
import cl from "../styles/formButton.module.css";

export default function FormButton({children}){
    return (
        <button className={cl.button} type="submit">{children}</button>
    );
}