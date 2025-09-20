import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { OrderFinished } from "./OrderFinished"
import { UserDataContext } from "../context/UserDataContext"
import { ProductsContext } from "../context/ProductsContext"
import { ColorsContext } from "../context/ColorsContext"
import { useContext, useEffect, useState } from "react"
import { createTicket } from "../firebase"
import { Select } from "antd"
import toast from "react-hot-toast"
const { Option } = Select;
export function FinishOrder() {
    const [purchaseStatus, setPurchaseStatus] = useState("")
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [contextUser, setContextUser] = useState("");
    const [contextEmail, setContextEmail] = useState("");

    const [selectedValues, setSelectedValues] = useState({});
    const colorsContext = useContext(ColorsContext)
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

    const handleFinishOrder = (e)=>{
        e.preventDefault()

        const faltanColores = cartContext.listaProds.some(
            (task) => !selectedValues[task.productName]
        );
        if (faltanColores) {
            toast.error("Tenés que seleccionar un color para todos los productos.");
            return;
        }

        const colores = selectedValues;
        const purchaseStatu = createTicket(user, email, phone, cartContext.totalPrice, cartContext.totalQuantity, cartContext.listaProds, colores)
        setPurchaseStatus(purchaseStatu);
        cartContext.clearCart();
    }

    return (
        <main>
            <section className={purchaseStatus === "" ? "order" : "none"}>
                <div className="finish-order">
                    <h2>Completar Encargo</h2>
                    <form action="" onSubmit={handleFinishOrder}>
                        <Input defaultValue={contextUser} onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="Nombre"/>
                        <Input defaultValue={contextEmail} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Mail"/>
                        <Input onChange={(e)=>{setPhone(e.target.value)}} type="tel" pattern="(\s?\d{2}\s?\d{4}-?\d{4}" placeholder="Numero de Telefono (+54 11 1234-5678)"/>
                        <Button type="submit" text="Completar Encargo"/>
                    </form>
                </div>
                <div className="resume">
                    <h3>Resumen</h3>
                    <div className="order-resume">
                        {cartContext.listaProds.map((task) => {
                            return(
                                <div key={task.id} className="order-resume-prod">
                                    <img src={task.img} alt="imagen producto" />
                                    <h4>{task.productName}</h4>
                                    <Select
                                    value={selectedValues[task.productName]} 
                                    onChange={(value) => setSelectedValues({
                                        ...selectedValues,
                                        [task.productName]: value
                                    })}
                                    placeholder="Seleccioná una opción"
                                    style={{ width: 200 }}
                                    >
                                        {colorsContext.colors.map((op) => (
                                            <Option key={op.id} value={op.colorName}>
                                            {op.colorName}
                                            </Option>
                                        ))}
                                    </Select>
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