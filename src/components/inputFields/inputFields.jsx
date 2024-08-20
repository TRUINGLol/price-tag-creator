import React from "react";
import cl from "../styles/inputFields.module.css";

export default function InputFields({index,setFormData}){
    
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevData=>({
            ...prevData,
            [name]:value
        }));
    }

    return(
        <div className={cl.inputs}>
            <input type="text" className={cl.productName} placeholder="Яблоко" name={`productName${index}`} onChange={handleChange}/>
            <input type="text" className={cl.unit} placeholder="Шт." name={`unit${index}`} onChange={handleChange}/>
            <input type="text" className={cl.productCode} placeholder="0000" name={`productCode${index}`} onChange={handleChange}/>
            <input type="text" className={cl.price} placeholder="99" name={`price${index}`} onChange={handleChange}/>
            <input type="text" className={cl.oldPrice} placeholder="199" name={`oldPrice${index}`} onChange={handleChange}/>
            <input type="text" className={cl.originCountry} placeholder="Россия" name={`originCountry${index}`} onChange={handleChange}/>
            <input type="text" className={cl.amount} placeholder="1" name={`amount${index}`} onChange={handleChange}/>           
        </div>
    );
}