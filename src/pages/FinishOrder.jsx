import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { CartProduct } from "../components/CartProduct"
import { ProductsContext } from "../context/ProductsContext"
import { useContext, useState } from "react"

import { createTicket } from "../firebase"

import toast from "react-hot-toast"

export function FinishOrder() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [purchaseStatus, setPurchaseStatus] = useState("");
    const cartContext = useContext(ProductsContext)


    const handleFinishOrder = ()=>{
        if(user != "" && email != "" && phone != ""){
            const purchaseStatu = createTicket(user, email, phone, cartContext.totalPrice, cartContext.totalQuantity, cartContext.listaProds)
            setPurchaseStatus(purchaseStatu);
            console.log(purchaseStatus)
        } else{
            toast.error("Debe llenar todos los campos primero⌨️!")
        }
    }

    return (
        <main className="order">
            <div className="finish-order">
                <h2>Completar Encargo</h2>
                <div>
                    <Input onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="Nombre"/>
                    <Input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Mail"/>
                    <Input onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder="Numero de Telefono"/>
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