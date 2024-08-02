import React from "react";
import cl from "./styles/NotFound.module.css";

export default function NotFound(){
    return (
        <div className={cl.notFound}>
            <p className={cl.ops}>Oops...</p>
            <p className={cl.sww}><span>Something</span> went wrong</p>
            <p className={cl.err}>404</p>
            <p className={cl.pnf}>Page not found</p>
        </div>
    );
}