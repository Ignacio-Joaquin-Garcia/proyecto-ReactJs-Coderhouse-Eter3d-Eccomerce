import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { DataBaseContext } from "../context/DataBaseContext";
import { ProductListCards } from "../components/ProductListCards";

export function ProductCategory(){
    const [data, setData] = useState([]);
    const PARAMS = useParams();
    const dataBaseContext = useContext(DataBaseContext)
    useEffect(()=>{
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            const auxArray = [];
                apiData.forEach(element => {
                    if(element.category === PARAMS.category){
                        auxArray.push(element);
                    }
                    setData(auxArray);
                });
        }
    },[PARAMS.category, dataBaseContext.dataProducts]);

    return(
        <section className="category-products">
            <h2 className="seccion">{(PARAMS.category).toUpperCase()}</h2>
            <ProductListCards productShow={data}/>
        </section>
    )
}