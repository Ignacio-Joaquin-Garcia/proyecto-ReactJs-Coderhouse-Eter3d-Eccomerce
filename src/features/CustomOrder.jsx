import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react";

export function CustomOrder(){    
    const [message, setMessage] = useState(
        {nombre:"", tipoProducto:"", medidas:"", detalles:""}
    );
    const handleSubmit = ()=>{
        const mensaje = `
        Hola ETER3d, mi nombre es: *${message.nombre}*, quisiera hacerle un encargo personalizado.
        \n Tipo Producto: *${message.tipoProducto}*
        \n Medidas: *${message.medidas}* 
        \n Detalles: *${message.detalles}* 
        `;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=+5491137899844&text=${mensajeCodificado}`;
        window.open(urlWhatsApp, "_blank")
    };
    const refreshData = (e,valor)=>{
        switch (valor){
            case 1: 
                setMessage({nombre:e.target.value, tipoProducto:message.tipoProducto, medidas:message.medidas, detalles:message.detalles})
                break;
            case 2:
                setMessage({nombre:message.nombre, tipoProducto:e.target.value, medidas:message.medidas, detalles:message.detalles})
                break;
            case 3:
                setMessage({nombre:message.nombre, tipoProducto:message.tipoProducto, medidas:e.target.value, detalles:message.detalles})
                break;
            case 4:
                setMessage({nombre:message.nombre, tipoProducto:message.tipoProducto, medidas:message.medidas, detalles:e.target.value})
                break
            default:
                console("error")
        }
    }

    return(
        <form className="customOrder" onSubmit={handleSubmit}>
            <h2>Hace tu pedido Personalizado</h2>
            <div>
                <Input id="1" type="text" placeholder="Nombre" onChange={(e)=>{refreshData(e,1)}}/>
                <Input id="2" type="text" placeholder="Tipo Producto" onChange={(e)=>{refreshData(e,2)}}/>
                <Input id="3" type="text" placeholder="Medidas" onChange={(e)=>{refreshData(e,3)}}/>
                <textarea id="4" maxLength="350" placeholder="Detalles que quieras incluir" onChange={(e)=>{refreshData(e,4)}}></textarea>
            </div>
            <p>*Nos pondremos en contacto contigo para aclarar detalles</p>
            <Button className="" text="Enviar Encargo Personalizado" type="submit"/>
        </form>
    )
}