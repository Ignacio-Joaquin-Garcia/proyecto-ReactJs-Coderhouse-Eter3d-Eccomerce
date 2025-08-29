import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { CardProduct } from "../components/CardProduct";



export function ProductCategory(){
    const [data, setData] = useState([]);
    const PARAMS = useParams();

    const URL = `https://fakestoreapi.com/products/`;
    

    
    useEffect(()=>{
        async function getData(){
            try{
                const resultadoCrudo = await fetch(URL);
                const resultado = await resultadoCrudo.json();
                const auxArray = [];
                resultado.forEach(element => {
                    if(element.category === PARAMS.category){
                        auxArray.push(element);
                    }
                    setData(auxArray);
                });
            } catch{
                alert("Error al Cargar datos de la API "+ URL);
            }
        }
        getData();
    },[PARAMS.category, URL]);


    return(
        <section className="category-products">
            <h2 className="seccion">{(PARAMS.category).toUpperCase()}</h2>
            {data.map((info) =>(
                <CardProduct key={info.id} id={info.id} productName={info.title} price={info.price} img={info.image} class={info.class}/>
            ))}
        </section>
    )
}