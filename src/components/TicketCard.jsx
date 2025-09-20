import { useEffect, useState } from "react"
import { Button } from "./Button"
import { CartProduct } from "./CartProduct"
import { deleteTicketById } from "../firebase"
export function TicketCard(props) {
    const [compra, setCompra] = useState([])
    useEffect(()=>{
        setCompra(props.compra)
    },[props.compra])
    const handleDelete = ()=>{
        deleteTicketById(props.id)
    }

    return (
        <div className="order-info-important">
            <div className="info-important">
                <p>Id Ticket: <span>{props.id}</span></p>
                <p>Usuario: <span>{props.usuario}</span></p>
                <p>Email: <span>{props.email}</span></p>
                <p>Telefono: <span>{props.telefono}</span></p>
                <p>Total de la compra: <span>${props.totalCompra}</span></p>
            </div>
            
            <div>
                {
                    compra.map((product)=>{
                        
                        return(
                            <div key={product.id}>
                                <CartProduct id={product.id} productName={product.productName} description={product.description} img={product.img} price={product.price} stockSelected={product.stockSelected}/>
                                <p>Color Seleccionado: <span>{props.colores[product.productName]}</span></p>
                            </div>
                        )
                    })
                }
            </div>
            <Button onClick={handleDelete} text="Eliminar Ticket"/>
        </div>
    )
}