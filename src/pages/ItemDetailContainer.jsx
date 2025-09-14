import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { DataBaseContext } from "../context/DataBaseContext";
import { ItemDetail } from "../static/ItemDetail";

export function ItemDetailContainer(){
    const [data, setData] = useState(null);
    const dataBaseContext = useContext(DataBaseContext)
    const PARAMS = useParams();
    useEffect(()=>{        
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            const itemData = apiData.find((prod) => (prod.id == PARAMS.id))
            console.log(itemData)
            setData(itemData)
        }
    },[dataBaseContext.dataProducts, PARAMS.id]);


    return (
        <>
            {data ? (<ItemDetail id={data.id} image={data.image} title={data.title} price={data.price} description={data.description}  />) : (<p>Cargando...</p>)}
        </>
    );
}
