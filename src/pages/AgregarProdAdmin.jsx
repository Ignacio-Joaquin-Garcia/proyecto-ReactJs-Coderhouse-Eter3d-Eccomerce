import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { sendData } from "../firebase";
import { updateDataById, updateDataByName, deleteProductByName, deleteProductById, getTickets } from "../firebase";
import { TicketCard } from "../components/TicketCard";
import { UserDataContext } from "../context/UserDataContext";
import { useNavigate } from "react-router-dom";
export function AgregarProdAdmin() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [prodUpdateID, setProdUpdateID] = useState(undefined);
    const [prodUpdateName, setProdUpdateName] = useState(undefined);
    const [prodDeleteId, setProdDeleteId] = useState("")
    const [prodDeleteName, setProdDeleteName] = useState("")
    const [tickets, setTickets] = useState([]);
    const [canEnter, setCanEnter] = useState(false);
    const navigate = useNavigate()
    const credencialesContext = useContext(UserDataContext);

    const handleSubmit = ()=>{
        sendData(title, description, category, price, image);
    }
    const changeProdById = ()=>{
        function checkUpdate(){
            if(titleChange === ""){
                titleChange = undefined;
            }
            if(descriptionChange === ""){
                descriptionChange = undefined;
            }
            if(categoryChange === ""){
                categoryChange = undefined;
            }
            if(priceChange === ""){
                priceChange = undefined;
            }
            if(imageChange === ""){
                imageChange = undefined;
            }
        }
        let titleChange = title;
        let descriptionChange = description;
        let categoryChange = category;
        let priceChange = price;
        let imageChange = image;
        checkUpdate();
        updateDataById(prodUpdateID, titleChange, descriptionChange, categoryChange, priceChange, imageChange);
    }
    const changeProdByName = ()=>{
        function checkUpdate(){
            if(titleChange === ""){
                titleChange = undefined;
            }
            if(descriptionChange === ""){
                descriptionChange = undefined;
            }
            if(categoryChange === ""){
                categoryChange = undefined;
            }
            if(priceChange === ""){
                priceChange = undefined;
            }
            if(imageChange === ""){
                imageChange = undefined;
            }
        }
        let titleChange = title;
        let descriptionChange = description;
        let categoryChange = category;
        let priceChange = price;
        let imageChange = image;
        checkUpdate();
        updateDataByName(prodUpdateName, titleChange, descriptionChange, categoryChange, priceChange, imageChange);
    }
    const deleteProdById = ()=>{
        deleteProductById(prodDeleteId);
    }
    const deleteProdByName = ()=>{
        deleteProductByName(prodDeleteName);
    }

    useEffect(()=>{
        const fetchTickets = async () => {
            const dataTickets = await getTickets();
                setTickets(dataTickets);
        }
        fetchTickets();
    }, []);
    useEffect(()=>{
        if(credencialesContext.userData.id != "iQvBkge6R4NloJd4WSfc"){
            setCanEnter(false)
            navigate("/")
        } else{
            setCanEnter(true)
        }
    },[credencialesContext.userData, navigate])

    return (
        <main className={canEnter ? "" : "none"}>
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
            <div className="actualizar-prod-db">
                <h1>Actualizar Datos de un Producto</h1>
                <div className="inputs-db-change">
                    <h2>Ingrersar ID o Nombre del Producto a actualizar</h2>
                    <Input placeholder="Actualizar por Nombre" onChange={(e)=>{setProdUpdateName(e.target.value)}}/>
                    <Input placeholder="Actualizar por ID" onChange={(e)=>{setProdUpdateID(e.target.value)}}/>
                </div>
                <div className="inputs-db-change">
                    <h2>Datos a Actualizar</h2>
                    <Input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Nombre del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setDescription(e.target.value)}} placeholder="Descripción del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setCategory(e.target.value)}} placeholder="Categoria del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Precio del Producto" type="number"></Input>
                    <Input onChange={(e)=>{setImage(e.target.value)}} placeholder="Imagen del Producto" type="url"></Input>
                </div>
                <div className="buttons-submit">
                    <Button onClick={changeProdByName} text="Actualizar Producto por Nombre"/>
                    <Button onClick={changeProdById} text="Actualizar Producto por ID"/>
                </div>
            </div>
            <div className="actualizar-prod-db">
                <h1>Borrar Producto por Nombre</h1>
                <div className="inputs-db-change">
                    <h2>Ingrersar Nombre del Producto a Eliminar</h2>
                    <Input placeholder="Borrar por Nombre" onChange={(e)=>{setProdDeleteName(e.target.value)}}/>
                </div>
                <div className="buttons-submit">
                    <Button onClick={deleteProdByName} text="Eliminar Producto por Nombre"/>
                </div>
            </div>
            <div className="actualizar-prod-db">
                <h1>Borrar Producto por ID</h1>
                <div className="inputs-db-change">
                    <h2>Ingrersar ID del Producto a Eliminar</h2>
                    <Input placeholder="Borrar por ID" onChange={(e)=>{setProdDeleteId(e.target.value)}}/>
                </div>
                <div className="buttons-submit">
                    <Button onClick={deleteProdById} text="Eliminar Producto por ID"/>
                </div>
            </div>
            <div className="ordenes-compra-admin">
                <h1>Ordenes de compra</h1>
                {   
                    tickets.map((ticket)=>{
                        return <TicketCard key={ticket.id} id={ticket.id} totalCompra={ticket.totalCompra} usuario={ticket.usuario} email={ticket.email} telefono={ticket.numeroTelefono} compra={ticket.compra.listaProducts}/>
                    })
                }
            </div>
        </main>
    )
}