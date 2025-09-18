import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { OrderFinished } from "./OrderFinished"
import { UserDataContext } from "../context/UserDataContext"
import { ProductsContext } from "../context/ProductsContext"
import { useContext, useEffect, useState } from "react"
import { createTicket } from "../firebase"
import toast from "react-hot-toast"

export function FinishOrder() {
    const [purchaseStatus, setPurchaseStatus] = useState("")
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [contextUser, setContextUser] = useState("");
    const [contextEmail, setContextEmail] = useState("");

    const cartContext = useContext(ProductsContext)
    const userContext = useContext(UserDataContext);
    useEffect(()=>{
        if((userContext.userData.usuario != undefined) && (userContext.userData.email != undefined)){
            const usuario = userContext.userData.usuario;
            const email = userContext.userData.email;
            setContextUser(usuario);
            setContextEmail(email);
            setUser(usuario);
            setEmail(email);
        }
    }, [userContext.userData])

    const handleFinishOrder = ()=>{
        if(user != "" && email != "" && phone != ""){
            const purchaseStatu = createTicket(user, email, phone, cartContext.totalPrice, cartContext.totalQuantity, cartContext.listaProds)
            setPurchaseStatus(purchaseStatu);
            cartContext.clearCart();
        } else{
            toast.error("Debe llenar todos los campos primero⌨️!")
        }
    }

    return (
        <main>
            <section className={purchaseStatus === "" ? "order" : "none"}>
                <div className="finish-order">
                    <h2>Completar Encargo</h2>
                    <div>
                        <Input defaultValue={contextUser} onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="Nombre"/>
                        <Input defaultValue={contextEmail} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Mail"/>
                        <Input onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder="Numero de Telefono"/>
                    </div>
                    <Button onClick={handleFinishOrder} text="Completar Encargo"/>
                </div>
                <div className="resume">
                    <h3>Resumen</h3>
                    <div className="order-resume">
                        {cartContext.listaProds.map((task) => {
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
                            <p>Total de la Compra: <span className="order-total-numbers">${cartContext.totalPrice}</span></p>
                            <p>Total cantidad productos: <span className="order-total-numbers">{cartContext.totalQuantity}</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <OrderFinished className={purchaseStatus === "" ? "none" : "order"} numeroEncargo={purchaseStatus}/>
        </main>
    )
}