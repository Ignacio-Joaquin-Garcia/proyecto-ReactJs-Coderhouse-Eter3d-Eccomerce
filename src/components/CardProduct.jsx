import { Button } from "./Button"
import { Link } from "react-router-dom"

import { ProductsContext } from "../context/ProductsContext"
import { useContext, useState } from "react"

export function CardProduct(props){
    const [animation, setAnimation] = useState("");
    const [stockSelect, setStockSelect] = useState(1);
    const cartContext = useContext(ProductsContext);

    const handleCartFirstTouch = ()=>{
        setAnimation("none");
    }
    const handleCartSecondTouch = ()=>{
        const cartProduct = {
            id: props.id,
            productName: props.productName, 
            description: props.description,
            img: props.img,
            price: props.price * stockSelect,
            stockSelected: stockSelect,
        }
        console.log(cartProduct);
        cartContext.addItemToCart(cartProduct);
        setStockSelect(1)
        setAnimation("");
    }

    
    const handleStockSelectP = ()=>{
        const newStock = stockSelect + 1;
        setStockSelect(newStock)
    }
    const handleStockSelectM = ()=>{
        if(stockSelect > 1){
            const newStock = stockSelect - 1;
            setStockSelect(newStock);
        }
    }
    
    return(
        <>
            <div className={"card-product" + " " + props.class}>
                <img src={props.img} alt="" />
                <p>{props.productName}</p>
                <p>{"$"+props.price}</p>
                <Link to={`/products/detail/${props.id}`}>Ver más</Link>
                <Button text="Encargar Ahora"/>
                <Button className={"reactivo50" + " " + animation} text="Agregar al Carrito" onClick={handleCartFirstTouch}/>
                <div className={animation === "" ? "none" : "stock-select"}>
                    <h3 className={animation === "" ? "none" : ""}>Eliga Cantidad Deseada</h3>
                    <div>
                        <Button className={animation === "" ? "none" : "left-button"} text="<" onClick={handleStockSelectM}/>
                        <p className={animation === "" ? "none" : ""}>{stockSelect}</p>
                        <Button className={animation === "" ? "none" : "left-button"} text=">" onClick={handleStockSelectP}/>
                    </div>
                    <Button className={animation === "" ? "none" : "secundario"} text="Agregar al Carrito" onClick={handleCartSecondTouch}/>
                </div>
            </div>
        </>
    )
}