import { useEffect, useState } from "react";

import { CardProduct } from "../components/CardProduct"
import { Button } from "../components/Button"

let i = 0;
export function CardContainer(){
    const [productData, setProductData] = useState([]);
    const [productShow, setProductShow] = useState([]);
    const loadBack = ()=>{
        return new Promise((resolve, reject) => {
            let success = true;
            if(success){
                resolve(
                    //Subida Datos API
                    [
                        {id:1, productName:"Porta Celulares", price:5000, imgUrl:"#"},
                        {id:2, productName:"Stich", price:4500, imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nbf2lTaId266iQmMV0GNiVM8xPBsJFhJYQmO8xks0o1Cm5aO3TzXLgjFC4xS-eRy8pk&usqp=CAU"},
                        {id:3, productName:"Yoda", price:2000, imgUrl:"https://tufigura3d.com/wp-content/uploads/2021/03/Impresion-3D-filamento-vs-resina-scaled.jpg"},
                        {id:4, productName:"Gatito Hexagonal", price:2000, imgUrl:"https://preview.free3d.com/img/2015/12/1688735414812149471/8s69zm9j.jpg"},
                        {id:5, productName:"Barco 3d", price:300, imgUrl:"https://img.pccomponentes.com/pcblog/914/impresion-3d-opt.jpg"},
                        {id:6, productName:"Pelicula", price:20000, imgUrl:"https://formlabs.com/_next/image/?url=https%3A%2F%2Fformlabs-media.formlabs.com%2Ffiler_public_thumbnails%2Ffiler_public%2F7f%2F5b%2F7f5b317f-32a8-455d-ab8b-dd904b8929bd%2Foptimized_for_web_jpeg-07192020_3l_prints_282_1s.jpg__1354x0_q85_subsampling-2.jpg&w=3840&q=75"},
                        {id:7, productName:"Engranaje", price:22345, imgUrl:"https://ele.chaco.gob.ar/pluginfile.php/1102641/mod_book/chapter/17742/2.jpg"},
                        {id:8, productName:"Calavera", price:100000, imgUrl:"https://scontent.cdninstagram.com/v/t51.71878-15/527592823_773162545577894_7580715559779623851_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzY5MzQ3NzU2MjUxODUyMzg2Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=MpSQOW-eXSsQ7kNvwHXQYXF&_nc_oc=AdlC5I7F5DGl-tb2H6kXOTqs1Cj8Gju2qpNj9ZlsuM_c_Vw0zCDNgAi9XffiX7T-nowmI27Br1g_6ia7ljizem2G&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=S6Lf8X62iCN1aztkybdCTg&oh=00_AfXUUc1wF-O3tVSx5Wjbw4chEI31LwDsS17agsc6IUeWYw&oe=6899BD0B"},
                        {id:9, productName:"hundido", price:100000, imgUrl:"https://scontent.cdninstagram.com/v/t51.71878-15/522668807_751641390563697_1217578083938856484_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ig_cache_key=MzY4NDA2MjI4Njg5NTA0MTM2NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=l98dcr8GZlIQ7kNvwHEXefC&_nc_oc=AdmQC4jgwo8NLjFGzj4Tjf25Ylp2OUTbVTnhb679jRxF1rNNynVLx8Gvc4R1pATEhQQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=8TErNvTxajHY4KQQfHtuAQ&oh=00_AfWrfJknTcDAymgD1WmY2LEYnmKRZhM0BR9P1LPC5prL7w&oe=68999DA1"}
                    ]
                    
                )
            } else{
                //Error de la Subida datos API
                reject("ERORR")
            }
        })
    }
    useEffect(()=>{
        loadBack()
        .then((data)=>{
            setProductData(data);
            setProductShow(data.slice(0,3))
        })
        .catch((error)=>{
            alert(error)
        });
    },[])

    const handleShowProductM = ()=>{
        i--
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
            i++
        }
    }
    const handleShowProductP = ()=>{
        i++
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
                <img src="assets/img/icons/heart.svg" alt="corazon" />
                <h2>Nuestros Productos Destacados</h2>
            </div>

            <div className="card-container">
                <button className="arrow" onClick={handleShowProductM}><img src="assets/img/icons/arrow_left.svg" alt="izquierda" /></button>
                {productShow.map((task) => (
                    <CardProduct key={task.id} productName={task.productName} price={task.price} img={task.imgUrl} class={task.class}/>
                ))}
                <button className="arrow" onClick={handleShowProductP}><img src="assets/img/icons/arrow_right.svg" alt="derecha" /></button>
            </div>
            <Button onClick={()=>{window.location.href = "#"}} className="links" text="Ver todo el catalogo"/>

        </section>
    )
}