import { Button } from "../features/Button"

export function CardProduct(props){

    return(
        <>
            <div className={"card-product" + " " + props.class}>
                <img src={props.img} alt="" />
                <p>{props.productName}</p>
                <p>{"$"+props.price}</p>
                <a href="#">Ver más</a>
                <Button text="Encargar Ahora"/>
                <Button className="reactivo50" text="Agregar al Carrito"/>
            </div>
        </>
    )
}