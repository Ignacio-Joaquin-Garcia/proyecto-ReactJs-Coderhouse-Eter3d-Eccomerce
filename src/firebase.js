import { initializeApp } from "firebase/app";
import { addDoc, collection, DocumentReference, getDocs, getFirestore, query, serverTimestamp, updateDoc, doc, where, deleteDoc} from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

import toast from "react-hot-toast";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBBkNiCiPE72fzY02BAODR92ieJz24kEcc",
    authDomain: "eter3d-e8bb2.firebaseapp.com",
    projectId: "eter3d-e8bb2",
    storageBucket: "eter3d-e8bb2.firebasestorage.app",
    messagingSenderId: "117550942064",
    appId: "1:117550942064:web:e634cb5f5099e189f531b5",
    measurementId: "G-GTHT5TCC2E"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//Funciones de Traer Datos
const db = getFirestore(app);
export async function getDatabase(){
    try{
        const querySnapshot = await getDocs(collection(db, "productos"))
        const data = []
        querySnapshot.forEach((item)=>{
            data.push({id:item.id, ...item.data()});
        })
        return data;
    } catch (er){
        toast.error("Error en la carga de datos: "+er.message);
    }
}
export async function getUsers(){
    try{
        const querySnapshot = await getDocs(collection(db, "usuarios"))
        const users = []
        querySnapshot.forEach((user)=>{
            users.push({id:user.id, ...user.data()});
        })
        return users;
    } catch (er){
        toast.error("Error en la carga de datos: " + er.message);
    }
}
export async function getTickets(){
    try{
        const querySnapshot = await getDocs(collection(db, "tickects"))
        const tickets = [];
        querySnapshot.forEach((ticket)=>{
            tickets.push({id:ticket.id, ...ticket.data()});
        })
        console.log(tickets)
        return tickets;
    } catch(er){
        toast.error("Error al traer los tickets " + er.message);
    }
}
//Funciones de Enviar Datos
export async function sendData(title, description, category, price, image){
    toast.loading();
    const productCollection = collection(db, "productos");
    const newItem = {title: title, description: description, category: category, price: price, image: image};
    try{
        const docRef = await addDoc(productCollection, newItem);
        toast.dismiss()
        toast.success(`Documento creado con exito con ID: ${docRef.id}`)
    } catch(er){
        toast.dismiss();
        toast.error("Error en la creacion del producto"+ er.message);
    }
}
export async function createUser(usuario, email, contraseña){
    toast.loading()
    const usersCollection = collection(db, "usuarios");
    const newUser = {usuario: usuario, email: email, contraseña: contraseña, fechaCreacionCuenta: serverTimestamp()};
    try{
        await addDoc(usersCollection, newUser);
        toast.dismiss()
        toast.success(`Usuario Creado con Exito`);
    }catch(er){
        toast.error("Error en la creacion del usuario " + er.message);
    }
}
export async function createTicket(usuario, email, numeroTelefono, totalCompra, cantidadProductos, listaProducts){
    toast.loading()
    const ticketCollection = collection(db, "tickects");
    const newTicket = {usuario: usuario, email: email, numeroTelefono: numeroTelefono, totalCompra: totalCompra, cantidadProductos: cantidadProductos, compra:{listaProducts}, fechaTicket: serverTimestamp()};
    try{
        const docRef = await addDoc(ticketCollection, newTicket);
        toast.dismiss()
        toast.success(`Nos contactaremos contigo pronto!!`);
        toast.success(`Encargo Realizado con exito, tu id de encargo es: ${docRef.id}`);
        return docRef.id
    }catch(error){
        toast.error(error);
    }
}
//Funciones de Actualizar Datos
export async function updateDataByName(nameFilter, title, description, category, price, image) {
    toast.loading();
    const collectionProducts = collection(db, "productos")
    const productCollectionFilterName = query(collectionProducts, where("title", "==", nameFilter));
    const itemUpdate = {};
    if (title !== undefined){itemUpdate.title = title};
    if (description !== undefined){itemUpdate.description = description};
    if (category !== undefined){itemUpdate.category = category};
    if (price !== undefined){itemUpdate.price = price};
    if (image !== undefined){itemUpdate.image = image};
    try{
        const searchDocName = await getDocs(productCollectionFilterName);
        if (searchDocName.empty) {
            toast.dismiss();
            toast.error("No se encontró producto con ese nombre");
            return 0;
        }
        for(const docs of searchDocName.docs){
            await updateDoc(docs.ref, itemUpdate)
            toast.dismiss();
            toast.success(`Producto ${docs.id} Actualizado con exito`);
        }
    } catch(er){
        toast.dismiss();
        toast.error("error al actualizar el dato " + er.message);
    }
}
export async function updateDataById(idFilter, title, description, category, price, image) {
    toast.loading();
    const productCollectionFilterId = doc(db, "productos", idFilter);
    const itemUpdate = {};
    if (title !== undefined){itemUpdate.title = title};
    if (description !== undefined){itemUpdate.description = description};
    if (category !== undefined){itemUpdate.category = category};
    if (price !== undefined){itemUpdate.price = price};
    if (image !== undefined){itemUpdate.image = image};
    try{
        await updateDoc(productCollectionFilterId, itemUpdate)
        toast.dismiss();
        toast.success(`Producto ${idFilter} Actualizado con exito`);
    } catch(er){
        toast.dismiss();
        toast.error("error al actualizar el dato " + er.message);
    }
}
//Funciones de Borrar Datos
export async function deleteProductByName(name) {
    toast.loading();
    const collectionProducts = collection(db, "productos")
    const productCollectionFilterName = query(collectionProducts, where("title", "==", name));
    try{
        const searchDocName = await getDocs(productCollectionFilterName);
        if (searchDocName.empty) {
            toast.dismiss();
            toast.error("No se encontró producto con ese nombre");
            return 0;
        }
        for(const docs of searchDocName.docs){
            await deleteDoc(docs.ref);
            toast.dismiss();
            toast.success(`Producto ${docs.id} Eliminado con exito`);
        }
    }catch(er){
        toast.dismiss()
        toast.error("Error al eliminar el producto " + er.message)
    }
}
export async function deleteProductById(id) {
    toast.loading();
    const productCollectionFilterId = doc(db, "productos", id);
    try{
        await deleteDoc(productCollectionFilterId);
        toast.dismiss();
        toast.success(`Documento ${id} eliminado con exito`);
    }catch(er){
        toast.dismiss()
        toast.error("Error al eliminar el producto " + er.message)
    }
}
export async function deleteTicketById(id) {
    console.log(id)
    toast.loading();
    const ticketCollectionFilterId = doc(db, "tickects", id);
    try{
        await deleteDoc(ticketCollectionFilterId);
        toast.dismiss();
        toast.success(`Documento ${id} eliminado con exito`);
        toast.success(`Por favor recargue la pagina para ver los cambios!`, {duration: Infinity});
    }catch(er){
        toast.dismiss()
        toast.error("Error al eliminar el producto " + er.message)
    }
}