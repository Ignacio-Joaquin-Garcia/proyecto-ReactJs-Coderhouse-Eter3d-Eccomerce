import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react";

export function CustomOrder(){    
    const [message, setMessage] = useState(
        {nombre:"", tipoProducto:"", medidas:"", detalles:""}
    );
    const handleSubmit = ()=>{
        if(message.nombre != "" && message.tipoProducto != "" && message.medidas != ""){
            const mensaje = `
            Hola ETER3d, mi nombre es: *${message.nombre}*, quisiera hacerle un encargo personalizado.
            \n Tipo Producto: *${message.tipoProducto}*
            \n Medidas: *${message.medidas}* 
            \n Detalles: *${message.detalles}* 
            `;
            const mensajeCodificado = encodeURIComponent(mensaje);
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=+5491137899844&text=${mensajeCodificado}`;
            window.open(urlWhatsApp, "_blank")
        } else{
            
        }
    };

    return(
        <form className="customOrder">
            <h2>Hace tu pedido Personalizado</h2>
            <div>
                <Input id="1" type="text" placeholder="Nombre" onChange={(e)=>{setMessage({nombre:e.target.value, tipoProducto:message.tipoProducto, medidas:message.medidas, detalles:message.detalles})}}/>
                <Input id="2" type="text" placeholder="Tipo Producto" onChange={(e)=>{setMessage({nombre:message.nombre, tipoProducto:e.target.value, medidas:message.medidas, detalles:message.detalles})}}/>
                <Input id="3" type="text" placeholder="Medidas" onChange={(e)=>{setMessage({nombre:message.nombre, tipoProducto:message.tipoProducto, medidas:e.target.value, detalles:message.detalles})}}/>
                <textarea id="4" maxLength="350" placeholder="Detalles que quieras incluir" onChange={(e)=>{setMessage({nombre:message.nombre, tipoProducto:message.tipoProducto, medidas:message.medidas, detalles:e.target.value})}}></textarea>
            </div>
            <p>*Nos pondremos en contacto contigo para aclarar detalles</p>
            <Button className="" text="Enviar Encargo Personalizado" type="submit" onClick={handleSubmit}/>
        </form>
    )
}