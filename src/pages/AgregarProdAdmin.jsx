import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

import { sendData } from "../firebase";

export function AgregarProdAdmin() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    const handleSubmit = ()=>{
        sendData(title, description, category, price, image);
    }

    return (
        <main>
            <div className="agregar-prod-db">
                <h1>Crear Producto Venta</h1>
                <div>
                    <h2>Datos necesarios</h2>
                    <div>
                        <Input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Nombre del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setDescription(e.target.value)}} placeholder="Descripción del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setCategory(e.target.value)}} placeholder="Categoria del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Precio del Producto" type="number"></Input>
                        <Input onChange={(e)=>{setImage(e.target.value)}} placeholder="Imagen del Producto" type="url"></Input>
                        <div>
                            <p>Tamaño</p>
                            <div>

                            </div>
                        </div>
                        <div>
                            <p>Material</p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Button onClick={handleSubmit} text="Crear Producto"/>
            </div>
        </main>
    )
}