import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function ItemDetail(){
    const [data, setData] = useState({});
    const PARAMS = useParams();
    const URL = `https://fakestoreapi.com/products/${PARAMS.id}`;
    useEffect(()=>{        
        async function getData(){
            try{
                const resultadoCrudo = await fetch(URL);
                const resultado = resultadoCrudo.json();
                setData(resultado);
            } catch{
                alert("Error al Cargar datos de la API "+ URL);
            }
        }
        getData();
    },[]);


    return(
        <section className="individual-product">
            <div>
                <img src="" alt="" />
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.price}</p>
                    <div>
                        <form action="">
                            <div>
                                <h3>Tamaño</h3>
                                <input type="checkbox"><p>Pequeño</p></input>
                                <input type="checkbox"><p>Mediano</p></input>
                                <input type="checkbox"><p>Grande</p></input>
                            </div>
                            <div>
                                <h3>Material</h3>
                                <input type="checkbox"><p>XXX</p></input>
                                <input type="checkbox"><p>XXX</p></input>
                                <input type="checkbox"><p>XXX</p></input>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}