import { Link } from "react-router-dom"

import { Button } from "../components/Button";

export function ItemDetail(props){


    return(
        <section className="individual-product">
            <div className="product-selection">
                <img src={props.image} alt="Foto Adjunta al Producto" />
                <div>
                    <form action="">
                        <h2>{props.title}</h2>
                        <p>${props.price}</p>
                        <h3>Tamaño</h3>
                        <div>
                            <label>
                                Pequeño
                                <input type="checkbox" />
                            </label>
                            <label>
                                Mediano
                                <input type="checkbox" />
                            </label>
                            <label>
                                Grande
                                <input type="checkbox" />
                            </label>
                        </div>
                        <h3>Material</h3>
                        <div>
                            <label>
                                XXX
                                <input type="checkbox" />
                            </label>
                            <label>
                                XXX
                                <input type="checkbox" />
                            </label>
                            <label>
                                XXX
                                <input type="checkbox" />
                            </label>
                        </div>
                        
                        <Button text="Encargar Ahora" className="" type="submit" onClick={undefined}/>
                        <Button text="Agregar al Carrito" className="reactivo50" type="submit" onClick={undefined}/>
                    </form>
                </div>
            </div>
            <div className="product-description">
                <h2>Descripcion</h2>
                <p>{props.description}</p>
            </div>
            <div className="product-questions">
                <img src="/proyecto-ReactJs-Coderhouse-Eter3d-Eccomerce/assets/img/icons/github.svg" alt="Github Icono"/>
                <p>Si tenes dudas o queres hacer alguna modificacion no dudes en</p>
                <Button text="" className="links" type="" onClick={undefined}><Link to={`/contact`}>Contactarnos</Link></Button>
            </div>
        </section>
    )
}