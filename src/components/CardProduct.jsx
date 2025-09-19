import { Button } from "./Button"
import { Link } from "react-router-dom"
import { AddToCart } from "./addToCart"
import { CarrouselAnt } from "./carrouselAnt" 
export function CardProduct(props){
    const handleOrder = ()=>{
        props.finishOrder(props.id, props.productName, Number(props.price), props.description, props.img)
    }
    return(
        <>
            <div className={"card-product" + " " + props.class}>
                <img src={props.img} alt="" />
                <p>{props.productName}</p>
                <p>{"$"+props.price}</p>
                <Link to={`/products/detail/${props.id}`}>Ver más</Link>
                <Button onClick={handleOrder} text="Encargar Ahora"/>
                <AddToCart id={props.id} productName={props.productName} description={props.description} img={props.img} price={props.price}/>
            </div>
        </>
    )
}