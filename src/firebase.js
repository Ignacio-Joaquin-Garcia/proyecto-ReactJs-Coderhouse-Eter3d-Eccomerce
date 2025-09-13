import { initializeApp } from "firebase/app";
import { addDoc, collection, DocumentReference, getDocs, getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

const db = getFirestore(app);
export async function getData(){
    const querySnapshot = await getDocs(collection(db, "productos"));
    const data = []
    querySnapshot.forEach((item)=>{
        data.push(item.data());
    })
    console.log(data)
    return data;
}

export async function sendData(title, description, category, price, image){
    const productCollection = collection(db, "productos");
    const newItem = {title: title, description: description, category: category, price: price, image: image};
    try{
        const docRef = await addDoc(productCollection, newItem);
        toast.success(`Documento creado con exito con ID: ${docRef.id}`)
    } catch(error){
        toast.error(error);
    }
}
