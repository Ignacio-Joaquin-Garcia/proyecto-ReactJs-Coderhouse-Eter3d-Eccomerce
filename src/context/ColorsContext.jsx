import { createContext, useState, useEffect } from "react"
import { getColours } from "../firebase";

export const ColorsContext = createContext();

export function ColorsProvider(props){
    const [colors, setColors] = useState([])
    useEffect(()=>{
        async function loadColors(){
            const data = await getColours();
            setColors(data);
        }
        loadColors();
    }, []);

    const datosContext = {
        colors,
    }
    return(
        <ColorsContext.Provider value={datosContext}>
            {props.children}
        </ColorsContext.Provider>
    )
}