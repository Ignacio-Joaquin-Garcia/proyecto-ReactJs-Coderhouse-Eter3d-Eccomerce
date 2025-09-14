import { CardContainer } from "../features/CardContainer";
import { DataBaseContext } from "../context/DataBaseContext";

import { useEffect, useState, useContext } from "react";

export function Products() {
    const [arrayCategory, setArrayCategory] = useState([]);
    const dataBaseContext = useContext(DataBaseContext)

    useEffect(()=>{
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            let i = 0;
            let id = 1;
            let lastInfo = [];
            let arrayCategoriasProgreso = [];
            let añadirCategoria = true;
            apiData.forEach((info) =>{
                if(i === 0){
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo.push(info.category);
                }

                lastInfo.forEach((category)=>{
                    if(info.category === category){
                        añadirCategoria = false;
                    }
                })
                if(añadirCategoria){
                    id++;
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo.push(info.category);
                }
                añadirCategoria = true;
                i++;
                console.log(arrayCategoriasProgreso)
            });
            setArrayCategory(arrayCategoriasProgreso)
            console.log(arrayCategory)
        }
    },[dataBaseContext.dataProducts]);


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