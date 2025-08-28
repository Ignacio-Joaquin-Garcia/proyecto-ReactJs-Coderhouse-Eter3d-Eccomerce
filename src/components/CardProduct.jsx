import { Button } from "./Button"
import { Link } from "react-router-dom"

export function CardProduct(props){

    return(
        <>
            <div className={"card-product" + " " + props.class}>
                <img src={props.img} alt="" />
                <p>{props.productName}</p>
                <p>{"$"+props.price}</p>
                <Link to={`/products/detail/${props.id}`}>Ver más</Link>
                <Button text="Encargar Ahora"/>
                <Button className="reactivo50" text="Agregar al Carrito"/>
            </div>
        </>
    )
}