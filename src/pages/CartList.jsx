import { Button } from "../components/Button"
import { CartProduct } from "../components/CartProduct"


import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"

export function CartList() {
    const cartContext = useContext(ProductsContext);
    const navigate = useNavigate()

    const stockOnCartsChangue = (cartProductData)=>{
        cartContext.changeItemInCart(cartProductData);
    }

    const removeItem = (id)=>{
        cartContext.removeItemFromCart(id);
        console.log("borrando...")
    }
    const handleOrder = ()=>{
        navigate("/finish-order")
    }

    return (
        <main className="cart-list">
            <h1>Tu Carrito de Encargos</h1>
            {cartContext.listaProds.map((task) => (
                <CartProduct key={task.id} id={task.id} productName={task.productName} description={task.description} price={task.price} img={task.img} stockSelected={task.stockSelected} class={task.class} onChange={stockOnCartsChangue} onTrashClick={removeItem}/>
            ))}
            

            <Button className="cart-encargar" text="Encargar Ahora" onClick={handleOrder}/>
            <Button className="reactivo50" text="Vaciar Carrito" onClick={cartContext.clearCart}/>
        </main>
    )
}