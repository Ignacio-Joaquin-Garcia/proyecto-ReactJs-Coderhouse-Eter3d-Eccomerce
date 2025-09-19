import { useState, useEffect } from "react";
import { getColours } from "../firebase";
import { ColourCard } from "../components/ColourCard";
import toast from "react-hot-toast";
export function AvailableColours(){
    const [coloursData, setColoursData] = useState([]);
    useEffect(()=>{
        const gettingData = async ()=>{
            toast.loading("Cargando Colores")
            setColoursData(await getColours())
            toast.dismiss()
        }
        gettingData()
    },[]);

    return(
        <main className="available-colours">
            <h2>Colores Disponibles para todos los productos</h2>
            <div className="colors-container">
                {
                    coloursData.map((item)=>{
                        return (
                            <ColourCard key={item.id} colorName={item.colorName} colorImage={item.colorImage}/>
                        )
                    })
                }
            </div>
            
        </main>
    )
}