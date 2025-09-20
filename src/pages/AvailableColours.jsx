import { useState, useEffect, useContext } from "react";
import { ColorsContext } from "../context/ColorsContext";
import { ColourCard } from "../components/ColourCard";
export function AvailableColours(){
    const [coloursData, setColoursData] = useState([]);
    const colorsContext = useContext(ColorsContext)
    useEffect(()=>{
        const gettingData = async ()=>{
            setColoursData(colorsContext.colors);
        }
        gettingData()
    },[colorsContext.colors]);

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