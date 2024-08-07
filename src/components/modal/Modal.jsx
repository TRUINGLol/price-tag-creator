import React from "react";
import cl from "../styles/Modal.module.css";

export default function Modal({children, isVisible, setVisible}){
    
    let classes = [cl.modal];

    if(isVisible){
        classes.push(cl.active);
    }
    
    return (
        <div className={classes.join(' ')} onClick={()=>setVisible(false)}>
            <div className={cl.modalMain} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}