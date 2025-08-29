import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardProduct } from "../components/CardProduct";
import { Button } from "../components/Button";

import { getData } from "../async";

//let i = 0;
export function CardContainer(props){
    

    const [i,setI] = useState(1);
    
    const [productData, setProductData] = useState([]);
    const [productShow, setProductShow] = useState([]);

/*
    const loadBack = ()=>{
        return new Promise((resolve, reject) => {
            let success = true;
            if(success){
                resolve(

                    
                    //Carga de Datos API
                    [
                        {id:1, productName:"Panda", price:5000, categoria: "animales",imgUrl:"https://m.media-amazon.com/images/I/61b+cc8bhML.jpg"},
                        {id:2, productName:"Stich", price:4500, categoria: "animales", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nbf2lTaId266iQmMV0GNiVM8xPBsJFhJYQmO8xks0o1Cm5aO3TzXLgjFC4xS-eRy8pk&usqp=CAU"},
                        {id:3, productName:"Yoda", price:2000, categoria: "animales", imgUrl:"https://tufigura3d.com/wp-content/uploads/2021/03/Impresion-3D-filamento-vs-resina-scaled.jpg"},
                        {id:4, productName:"Gatito Hexagonal", categoria: "animales", price:2000, imgUrl:"https://preview.free3d.com/img/2015/12/1688735414812149471/8s69zm9j.jpg"},
                        {id:5, productName:"Barco 3d", price:300, categoria: "juguetes", imgUrl:"https://img.pccomponentes.com/pcblog/914/impresion-3d-opt.jpg"},
                        {id:6, productName:"Bee Hive Juego de Mesa", price:20000, categoria: "juguetes", imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEHvU-1Nf62TnQloJW14VitNf0SLBraMhQ&s"},
                        {id:7, productName:"Engranaje", price:22345, categoria: "juguetes", imgUrl:"https://ele.chaco.gob.ar/pluginfile.php/1102641/mod_book/chapter/17742/2.jpg"},
                        {id:8, productName:"Funda Violeta", price:100000, categoria: "fundas", imgUrl:"https://i.pinimg.com/474x/c0/9c/05/c09c0515c51b8b61a98e035b32c6d883.jpg"},
                        {id:9, productName:"Funda Gato Amarilla", price:100000, categoria: "fundas", imgUrl:"https://recicla3dplabs.wordpress.com/wp-content/uploads/2014/12/img_2770.jpg"},
                    ]
                    
                )
            } else{
                //Error de la Carga datos API
                reject("ERORR")
            }
        })
    }
*/

    useEffect(()=>{
        //loadBack()

        getData()
        .then((response) => response.json())
        .then((info)=>{
            console.log(props.category)
            const auxArray = [];
            let auxInfo;
            if(props.category !== undefined){
                
                info.forEach(element => {
                    if(element.category === props.category){
                        auxArray.push(element);
                    }
                    auxInfo = auxArray;
                });
            } else{
                console.log("Entrooooo")
                auxInfo = info;
            }
            
            let arrayToShow = [];
            console.log(auxInfo)
            auxInfo.forEach(element => {
                
                arrayToShow.push(element)
                
            });
            setProductData(arrayToShow);
            setProductShow(arrayToShow.slice(0,3))
            })
        .catch((error)=>{
            alert(error)
        });
    },[props.category])

    const handleShowProductM = ()=>{
        setI(i-1);
        console.log(i)
        //i--
        if(i>=0){
            const nextProducts = productData.slice(i, i + 4).map((product, index) => {
            let className = "";

            if (index < 3) {
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
        setProductShow(nextProducts)

        setTimeout(()=>{
            const nextProducts = productData.slice(i, i + 3).map(product => ({
            ...product,
            class: ""
        }));
        
        setProductShow(nextProducts)
        },650)
        }else{
            setI(i + 1);
            console.log(i)
            //i++
        }
    }
    const handleShowProductP = ()=>{
        
        setI(i + 1); 
        console.log(i)
        //i++
        const nextProducts = productData.slice(i-1, i + 3).map((product, index) => {
            let className = "";

            if (index < 3) {
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
            const nextProducts = productData.slice(i, i + 3).map(product => ({
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
                {productShow.map((task) => (
                    <CardProduct key={task.id} id={task.id} productName={task.title} price={task.price} img={task.image} class={task.class}/>
                ))}
                <button className="arrow" onClick={handleShowProductP}><img src="assets/img/icons/arrow_right.svg" alt="derecha" /></button>
            </div>
            <Button className={props.classButton} text=""><Link to={"/products"}>Ver todo el catalogo</Link></Button>

        </section>
    )
}