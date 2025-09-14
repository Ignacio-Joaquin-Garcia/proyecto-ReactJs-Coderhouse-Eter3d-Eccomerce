import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { CartProduct } from "../components/CartProduct"
import { ProductsContext } from "../context/ProductsContext"
import { useContext } from "react"

export function FinishOrder() {
    const cartContext = useContext(ProductsContext)


    const handleFinishOrder = ()=>{

    }

    return (
        <main className="order">
            <div className="finish-order">
                <h2>Completar Encargo</h2>
                <div>
                    <Input placeholder="Nombre"/>
                    <Input placeholder="Mail"/>
                    <Input placeholder="Numero de Telefono"/>
                </div>
                <Button onClick={handleFinishOrder} text="Completar Encargo"/>
            </div>
            <div className="resume">
                <h3>Resumen</h3>
                <div className="order-resume">
                    
                    {cartContext.listaProds.map((task) => {
                        console.log(task)
                        return(
                            <div key={task.id} className="order-resume-prod">
                                <img src={task.img} alt="imagen producto" />
                                <h4>{task.productName}</h4>
                                <p className="order-quantity">Cantidad: {task.stockSelected}</p>
                                <p>Precio: <span>${task.price}</span></p>
                            </div>
                        )
                        
                    })}
                    <div className="order-total">
                        <p>Total de la Compra: ${cartContext.totalPrice}</p>
                        <p>Total cantidad productos: {cartContext.totalQuantity}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}