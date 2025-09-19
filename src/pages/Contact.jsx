import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useState } from "react";

export function Contact() {
    const [message, setMessage] = useState(
            {nombre:"", asunto:"", mensaje:""}
        );
        const handleSubmit = ()=>{
            const mensaje = `
            Hola ETER3d, mi nombre es: *${message.nombre}*.
            \n Asunto: *${message.asunto}*
            \n Mensaje: *${message.mensaje}* 
            \n Aguardo Pronta Respuesta
            `;
            const mensajeCodificado = encodeURIComponent(mensaje);
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=+5491137899844&text=${mensajeCodificado}`;
            window.open(urlWhatsApp, "_blank")
        };
        const refreshData = (e,valor)=>{
            switch (valor){
                case 1: 
                    setMessage({nombre:e.target.value, asunto:message.asunto, mensaje:message.mensaje});
                    break;
                case 2:
                    setMessage({nombre:message.nombre, asunto:e.target.value, mensaje:message.mensaje});
                    break;
                case 3:
                    setMessage({nombre:message.nombre, asunto:message.asunto, mensaje:e.target.value});
                    break;
                default:
                    console("error")
            }
        }

    return (
        <main>
            <section>
                <form className="contact customOrder" action="">
                    <h2>Contactanos por Whattsap</h2>
                    <div>
                        <Input id="1" type="text" placeholder="Nombre" onChange={(e)=>{refreshData(e,1)}}/>
                        <Input id="2" type="text" placeholder="Asunto" onChange={(e)=>{refreshData(e,2)}}/>
                        <textarea id="4" maxLength="350" placeholder="Mensaje" onChange={(e)=>{refreshData(e,3)}}></textarea>
                    </div>
                    <Button onClick={handleSubmit} text="Enviar Mensaje" type="submit"/>
                </form>
            </section>
            <p className="o">O</p>
            <section className="redes">
                <p>Escribinos a nuestras redes</p>
                <div>
                    <a href="https://www.instagram.com/eter3d1/" target="_blank"><img src="assets/img/instagram.svg" alt="Instagram" /></a>
                    <a href="https://wa.me/5491137899844?text=Buen%20día%20Eter3D%20deseo%20comunicarme%20con%20usted" target="_blank"><img src="assets/img/whattsap.svg" alt="Whattsap"/></a>
                </div>
            </section>
        </main>
    )
}