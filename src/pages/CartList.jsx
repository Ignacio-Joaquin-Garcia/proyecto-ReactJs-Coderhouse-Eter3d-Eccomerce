import { Button } from "../components/Button"
import { CartProduct } from "../components/CartProduct"

export function CartList() {

    return (
        <main className="cart-list">
            <h1>Tu Carrito de Encargos</h1>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>

            <Button className="cart-encargar" text="Encargar Ahora"/>
            <Button className="reactivo50 cart-encargar50" text="Vaciar Carrito"/>
        </main>
    )
}