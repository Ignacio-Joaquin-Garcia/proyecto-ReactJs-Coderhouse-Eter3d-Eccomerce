import { CardContainer } from "../features/CardContainer";
import { getData } from "../async";
import { useEffect, useState } from "react";

export function Products() {
    const [arrayCategory, setArrayCategory] = useState([]);
    useEffect(()=>{
        getData()
        .then((response) => response.json())
        .then((apiData) => {
            let i = 0;
            let id = 1;
            let lastInfo;
            let arrayCategoriasProgreso = [];
            apiData.forEach((info) =>{
                if(i === 0){
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo = info.category;
                }
                if(info.category !== lastInfo){
                    id++;
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo = info.category;
                }
                i++;
            });
            setArrayCategory(arrayCategoriasProgreso)
            console.log(arrayCategory)
        })
        .catch((error)=>{alert("Error en la carga de la API, Error: ", error)});
    },[]);


    return (
        <main>
            <section className="presentation">
                <img className="principal-img" src="assets/img/presentacion.png" alt="Eter3D" />
                <h1>Diseñamos en 3D lo que imaginás</h1>
            </section>
            <section className="container-all-products">
                {arrayCategory.map((category) =>{
                    return <CardContainer key={category.id} category={category.category} textH2={category.category} classH2="seccion" classImg="none" classButton="none"/>
                })}
            </section>
        </main>
    )
}