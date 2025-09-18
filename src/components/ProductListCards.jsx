import { CardProduct } from "./CardProduct"
import { ProductsContext } from "../context/ProductsContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
export function ProductListCards(props){
    const cartContext = useContext(ProductsContext);
    const navigate = useNavigate();
    function handleOrder(id, productName, price, description, img){
        const producto = {id: id, productName: productName, price: price, description: description, img: img, stockSelected: 1};
        cartContext.addItemToCart(producto);
        navigate("/finish-order");
    }

    return(
        <>
            {props.productShow.map((task) => (
                <CardProduct finishOrder={handleOrder} key={task.id} id={task.id} productName={task.title} description={task.description} price={task.price} img={task.image} class={task.class}/>
            ))}
        </>
    )
}