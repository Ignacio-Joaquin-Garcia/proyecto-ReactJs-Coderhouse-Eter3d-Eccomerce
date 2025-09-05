import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { ItemDetail } from "../static/ItemDetail";

export function ItemDetailContainer(){
    const [data, setData] = useState({});
    const PARAMS = useParams();
    const URL = `https://fakestoreapi.com/products/${PARAMS.id}`;
    useEffect(()=>{        
        async function getData(){
            try{
                const resultadoCrudo = await fetch(URL);
                const resultado = await resultadoCrudo.json();
                setData(resultado);
                console.log(data);
            } catch{
                alert("Error al Cargar datos de la API "+ URL);
            }
        }
        getData();
    },[]);


    return(
        <>
            <ItemDetail image={data.image} title={data.title} price={data.price} description={data.description}  />
        </>
    )
}