import { createContext, useState, useEffect } from "react"
import { getDatabase } from "../firebase";

export const DataBaseContext = createContext();

export function DbProvider(props){
    const [dataProducts, setDataProducts] = useState([])
    
    useEffect(()=>{
        async function loadData(){
            const data = await getDatabase();
            setDataProducts(data)
        }
        loadData()
        
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
