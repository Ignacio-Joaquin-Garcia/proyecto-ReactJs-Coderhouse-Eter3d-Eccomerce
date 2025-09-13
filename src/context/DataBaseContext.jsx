import { createContext, useState, useEffect } from "react"
import { getData } from "../firebase";

export const DataBaseContext = createContext();

export function DbProvider(props){
    const [dataProducts, setDataProducts] = useState([])

    useEffect(()=>{
        const db = getData();
        setDataProducts(db);
        
        
    }, []);

    //Funciones del context
    





    const datosContext = {
        dataProducts,
        
    }

    return(
        <DataBaseContext.Provider value={datosContext}>
            {props.children}
        </DataBaseContext.Provider>
    )
}
