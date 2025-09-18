import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductListCards } from "../components/ProductListCards";
import { Button } from "../components/Button";
import { DataBaseContext } from "../context/DataBaseContext";

export function CardContainer(props){
    const [i,setI] = useState(0);
    const [productData, setProductData] = useState([]);
    const [productShow, setProductShow] = useState([]);
    const [width, setWidth] = useState(0);
    const dataBaseContext = useContext(DataBaseContext)

    useEffect(()=>{
        function cardResize(){
            if(window.innerWidth < 1400){
            setWidth(1);
            } else if(window.innerWidth >=1400 && window.innerWidth < 1700){
                setWidth(2);
            } else{
                setWidth(3);
            }   
        }
        cardResize();
        window.addEventListener("resize", ()=>{
            cardResize();
        })
        return ()=>{
            window.removeEventListener("resize", cardResize);
        }
    },[])
    useEffect(()=>{
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            const auxArray = [];
            let auxInfo;
            if(props.category !== undefined){
                apiData.forEach(element => {
                    if(element.category === props.category){
                        auxArray.push(element);
                    }
                    auxInfo = auxArray;
                });
            } else{
                auxInfo = apiData;
            }
            let arrayToShow = [];
            auxInfo.forEach(element => {
                arrayToShow.push(element)
            });
            setProductData(arrayToShow);
            setProductShow(arrayToShow.slice(0,width))
        }
    },[props.category, dataBaseContext.dataProducts, width])
    

    const handleShowProductM = ()=>{
        if(i - 1 >= 0){
            const iCount = i - 1;
            setI(iCount);
            const nextProducts = productData.slice(iCount, iCount + (width + 1)).map((product, index) => {
                let className = "";
                if (index < width) {
                    if (index === 0){
                        className = "ingresa-derecha";
                    } else{
                        className = "move-right"; 
                    }
                } else {
                className = "desaparece-derecha"; 
                }
                return {
                ...product,
                class: className,
                };
            });
            setProductShow(nextProducts);
            setTimeout(()=>{
                const nextProducts = productData.slice(iCount, iCount + width).map(product => ({
                ...product,
                class: ""
                }));
                setProductShow(nextProducts)
            },650)
        };
    }
    const handleShowProductP = ()=>{
        const iCount = i + 1;
        setI(iCount); 
        const nextProducts = productData.slice(iCount-1, iCount + width).map((product, index) => {
            let className = "";
            if (index < width) {
                if (index === 0){
                    className = "desaparece-izquierda";
                } else{
                    className = "move-left"; 
                }
            } else {
            className = "ingresa-izquierda"; 
            }
            return {
            ...product,
            class: className,
            };
        });
        setProductShow(nextProducts)
        setTimeout(()=>{
            const nextProducts = productData.slice(iCount, iCount + width).map(product => ({
            ...product,
            class: ""
            }));
            setProductShow(nextProducts)
        },650)
    }

    return(
        <section className="remarkable-products">
            <div className="card-container-title">
                <img className={props.classImg} src="assets/img/icons/heart.svg" alt="corazon" />
                <h2 className={props.classH2}>{props.textH2}</h2>
            </div>
            <div className="card-container">
                <button className="arrow" onClick={handleShowProductM}><img src="assets/img/icons/arrow_left.svg" alt="izquierda" /></button>
                <ProductListCards productShow={productShow} />
                <button className="arrow" onClick={handleShowProductP}><img src="assets/img/icons/arrow_right.svg" alt="derecha" /></button>
            </div>
            <Button className={props.classButton} text=""><Link to={"/products"}>Ver todo el catalogo</Link></Button>
        </section>
    )
}