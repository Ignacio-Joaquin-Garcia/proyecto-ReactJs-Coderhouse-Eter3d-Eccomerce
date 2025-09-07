import { createContext, useState } from "react"

export const DataBaseContext = createContext();

export function DbProvider(props){
    

    //Funciones del context
    





    const datosContext = {
        item:0
        
    }

    return(
        <DataBaseContext.Provider value={datosContext}>
            {props.children}
        </DataBaseContext.Provider>
    )
}
