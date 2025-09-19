import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { sendData, sendColor, updateDataById, updateDataByName, deleteProductByName, deleteProductById, deleteColorByName, getTickets } from "../firebase";
import { TicketCard } from "../components/TicketCard";
import { UserDataContext } from "../context/UserDataContext";
import { useNavigate } from "react-router-dom";
export function AgregarProdAdmin() {
    const [submitData, setSubmitData] = useState({title: "", description: "", category: "", price: 0, image1: "", extraImages: {image2: "", image3: "", image4: "", image5: ""}});
    const [updateData, setUpdateData] = useState({title: "", description: "", category: "", price: 0, image1: "", extraImages: {image2: "", image3: "", image4: "", image5: ""}});

    const [prodUpdateID, setProdUpdateID] = useState(undefined);
    const [prodUpdateName, setProdUpdateName] = useState(undefined);
    const [prodDeleteId, setProdDeleteId] = useState("");
    const [prodDeleteName, setProdDeleteName] = useState("");

    const [tickets, setTickets] = useState([]);

    const [colorName, setColorName] = useState("")
    const [colorImage, setColorImage] = useState("")
    const [deleteNameColor, setDeleteNameColor] = useState("")

    const [canEnter, setCanEnter] = useState(false);
    const navigate = useNavigate()
    const credencialesContext = useContext(UserDataContext);

    const handleSubmit = ()=>{
        const imagenesOpcionales = {image2: submitData.extraImages.image2, image3: submitData.extraImages.image3, image4: submitData.extraImages.image4, image5: submitData.extraImages.image5};
        sendData(submitData.title, submitData.description, submitData.category, submitData.price, submitData.image1, imagenesOpcionales);
    }
    const handleColorSubmit = ()=>{
        sendColor(colorName, colorImage);
    }
    const handleDeleteColor = ()=>{
        deleteColorByName(deleteNameColor);
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
        let titleChange = submitData.title;
        let descriptionChange = submitData.description;
        let categoryChange = submitData.category;
        let priceChange = submitData.price;
        let imageChange = submitData.image1;
        let extraImages = {image2: submitData.extraImages.image2, image3: submitData.extraImages.image3, image4: submitData.extraImages.image4, image5: submitData.extraImages.image5}
        checkUpdate();
        updateDataById(prodUpdateID, titleChange, descriptionChange, categoryChange, priceChange, imageChange, extraImages);
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
            if(priceChange === 0 || priceChange === ""){
                priceChange = undefined;
            }
            if(imageChange === ""){
                imageChange = undefined;
            }
            if(extraImages.image2 === ""){
                extraImages.image2 = undefined;
            }
            if(extraImages.image3 === ""){
                extraImages.image3 = undefined;
            }
            if(extraImages.image4 === ""){
                extraImages.image4 = undefined;
            }
            if(extraImages.image5 === ""){
                extraImages.image5 = undefined;
            }
        }
        
        let titleChange = updateData.title;
        let descriptionChange = updateData.description;
        let categoryChange = updateData.category;
        let priceChange = updateData.price;
        let imageChange = updateData.image1;
        let extraImages = {image2: updateData.extraImages.image2, image3: updateData.extraImages.image3, image4: updateData.extraImages.image4, image5: updateData.extraImages.image5}
        checkUpdate();
        updateDataByName(prodUpdateName, titleChange, descriptionChange, categoryChange, priceChange, imageChange, extraImages);
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
                        <Input onChange={(e)=>{setSubmitData({...submitData, title: e.target.value })}} placeholder="Nombre del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, description: e.target.value })}} placeholder="Descripción del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, category: e.target.value })}} placeholder="Categoria del Producto" type="text"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, price: e.target.value })}} placeholder="Precio del Producto" type="number"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, image1: e.target.value })}} placeholder="Imagen Importante (default) del Producto" type="url"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, extraImages: {...submitData.extraImages, image2: e.target.value}})}} placeholder="Imagen (Opcional) 2 del Producto" type="url"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, extraImages: {...submitData.extraImages, image3: e.target.value}})}} placeholder="Imagen (Opcional) 3 del Producto" type="url"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, extraImages: {...submitData.extraImages, image4: e.target.value}})}} placeholder="Imagen (Opcional) 4 del Producto" type="url"></Input>
                        <Input onChange={(e)=>{setSubmitData({...submitData, extraImages: {...submitData.extraImages, image5: e.target.value}})}} placeholder="Imagen (Opcional) 5 del Producto" type="url"></Input>
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
                    <Input onChange={(e)=>{setUpdateData({...updateData, title: e.target.value })}} placeholder="Nombre del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, description: e.target.value })}} placeholder="Descripción del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, category: e.target.value })}} placeholder="Categoria del Producto" type="text"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, price: e.target.value })}} placeholder="Precio del Producto" type="number"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, image1: e.target.value })}} placeholder="Imagen 1 del Producto" type="url"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, extraImages: {...updateData.extraImages, image2: e.target.value}})}} placeholder="Imagen 2 del Producto" type="url"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, extraImages: {...updateData.extraImages, image3: e.target.value}})}} placeholder="Imagen 3 del Producto" type="url"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, extraImages: {...updateData.extraImages, image4: e.target.value}})}} placeholder="Imagen 4 del Producto" type="url"></Input>
                    <Input onChange={(e)=>{setUpdateData({...updateData, extraImages: {...updateData.extraImages, image5: e.target.value}})}} placeholder="Imagen 5 del Producto" type="url"></Input>
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
            <div className="actualizar-prod-db">
                <h1>Subir Colores</h1>
                <div className="inputs-db-change">
                    <h2>Ingresar Color a agregar</h2>
                    <Input placeholder="nombre color" onChange={(e)=>{setColorName(e.target.value)}}/>
                    <Input placeholder="imagen del color" onChange={(e)=>{setColorImage(e.target.value)}}/>
                </div>
                <div className="buttons-submit">
                    <Button onClick={handleColorSubmit} text="Agregar Color"/>
                </div>
            </div>
            <div className="actualizar-prod-db">
                <h1>Eliminar Colores</h1>
                <div className="inputs-db-change">
                    <Input placeholder="nombre color" onChange={(e)=>{setDeleteNameColor(e.target.value)}}/>
                </div>
                <div className="buttons-submit">
                    <Button onClick={handleDeleteColor} text="Eliminar Color"/>
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