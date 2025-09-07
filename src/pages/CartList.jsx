import { Button } from "../components/Button"
import { CartProduct } from "../components/CartProduct"
import { ProductListCards } from "../components/ProductListCards"

import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"

export function CartList() {
    const cartContext = useContext(ProductsContext);


    return (
        <main className="cart-list">
            <h1>Tu Carrito de Encargos</h1>
            {cartContext.listaProds.map((task) => (
                <CartProduct key={task.id} id={task.id} productName={task.productName} description={task.description} price={task.price} img={task.img} stockSelected={task.stockSelected} class={task.class}/>
            ))}
            

            <Button className="cart-encargar" text="Encargar Ahora"/>
            <Button className="reactivo50" text="Vaciar Carrito" onClick={cartContext.clearCart}/>
        </main>
    )
}