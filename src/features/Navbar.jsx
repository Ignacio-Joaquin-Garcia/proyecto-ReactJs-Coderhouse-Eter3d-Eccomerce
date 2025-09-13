import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import { CartWidget } from '../components/CartWidget';
import { getData } from '../async';

export function Navbar() {
    const [scrollBar, setScrollBar] = useState("");
    const [arrayCategory, setArrayCategory] = useState([]);


    useEffect(()=>{
        let lastScroll = 0;
        let i = 0
        let isScrollingDown = false
        function scrollHeader(){
            const currentScroll = window.scrollY;
            if(currentScroll < lastScroll){
                i--
            } else {
                i++
            }
            lastScroll = currentScroll
            if (((i<=0) && (isScrollingDown === true) || ((window.scrollY === 0) && (isScrollingDown === true)))){
                setScrollBar("scroll-up-animation")
                setTimeout(()=>{setScrollBar("scroll-up")},850)
                i=0
                isScrollingDown = false
            }
            if ((i>30) && (isScrollingDown === false)){
                setScrollBar("scroll-down-animation")
                setTimeout(()=>{setScrollBar("scroll-down")},850)
                i=10
                isScrollingDown = true
            }
            if((i>30) || (i<0)){
                i=15
            }
        }
        window.addEventListener("scroll",scrollHeader)
        return () => {window.removeEventListener("scroll",scrollHeader)};
    },[]);
    useEffect(()=>{
        getData()
        .then((response) => response.json())
        .then((apiData) => {
            let i = 0;
            let id = 1;
            let lastInfo;
            let arrayCategoriasProgreso = [];
            apiData.forEach((info) =>{
                if(i === 0){
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo = info.category;
                }
                if(info.category !== lastInfo){
                    id++;
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo = info.category;
                }
                i++;
            });
            setArrayCategory(arrayCategoriasProgreso)
        })
        .catch((error)=>{alert("Error en la carga de la API, Error: ", error)});
    },[]);

    

    return (
        <header className={scrollBar}>
            <img src="assets/img/logo.png" alt="Logo" />
            <div className="search">
                <input placeholder='Buscar Productos' type="text" />
            </div>
            <nav>
                <ul className='lista-principal'>
                    <li><Link to="/">Inicio</Link></li>
                    <li className='productos'>
                        <Link to="/products">Productos</Link>
                        <ul className='sublista-categoria'>
                            {arrayCategory.map((category) =>{
                                return <li key={category.id}><Link to={`/products/category/${category.category}`}>{category.category}</Link></li>
                            })}
                        </ul>
                    </li>
                    <li><Link to="/">Contacto</Link></li>
                    <li><Link to="/login">Ingresá</Link></li>
                    <li><Link to="/register">Creá tu Cuenta</Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
        
    )
}