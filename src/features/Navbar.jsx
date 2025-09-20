import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

import { DataBaseContext } from '../context/DataBaseContext';
import { CartWidget } from '../components/CartWidget';

import { UserDataContext } from '../context/UserDataContext';

export function Navbar() {
    const [scrollBar, setScrollBar] = useState("");
    const [arrayCategory, setArrayCategory] = useState([]);
    const [userData, setUserData] = useState({});
    const [menuHamburguesa, setMenuHamburguesa] = useState("none");
    const [handleMenuH, setHandleMenuH] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const dataBaseContext = useContext(DataBaseContext)
    const userContext = useContext(UserDataContext)

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
        const apiData = dataBaseContext.dataProducts;
        if(apiData != []){
            let i = 0;
            let id = 1;
            let lastInfo = [];
            let arrayCategoriasProgreso = [];
            let añadirCategoria = true;
            apiData.forEach((info) =>{
                if(i === 0){
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo.push(info.category);
                }
                lastInfo.forEach((category)=>{
                    if(info.category === category){
                        añadirCategoria = false;
                    }
                })
                if(añadirCategoria){
                    id++;
                    arrayCategoriasProgreso.push({id:id, category:info.category})
                    lastInfo.push(info.category);
                }
                añadirCategoria = true;
                i++;
            });
            setArrayCategory(arrayCategoriasProgreso)
        }
    },[dataBaseContext.dataProducts]);
    useEffect(()=>{
        setUserData(userContext.userData);
    },[userContext.userData]);

    useEffect(()=>{
        function displayMenuHamburguesa(){
            if(screenWidth < 800){
                setMenuHamburguesa("hamburguesa");
            } else{
                if(screenWidth >= 800){
                    setMenuHamburguesa("none");
                }
            }
        }
        function changueMenuHamburguesaByWidth(){
            setScreenWidth(window.innerWidth)
        }
        displayMenuHamburguesa();
        window.addEventListener("resize", changueMenuHamburguesaByWidth);
        return ()=>{
            window.removeEventListener("resize", changueMenuHamburguesaByWidth);
        }
    },[screenWidth]);

    const handleMenu = ()=>{
        if(handleMenuH === ""){
            setHandleMenuH("open-menu");
        } else{
            setHandleMenuH("");
        }
    }

    return (
        <header className={(scrollBar) + (menuHamburguesa === "none" ? "" : " nav-hamburguesa")}>
            <img className='logo' src="assets/img/logo.png" alt="Logo" />
            <div className="search">
                <input placeholder='Buscar Productos' type="text" />
            </div>
            <div className={handleMenuH}>
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
                        <li className='color'><Link to="/available-colours">Colores Disponibles</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li className='cuenta'>
                            <img src="assets/img/icons/user.svg" alt="user" />
                            <p>Cuenta <span>▽</span></p>
                            <ul className='sublista-cuenta'>
                                <p className='usuario'>{userData.usuario === undefined ? "" : `Bienvenido/a ${userData.usuario}`}</p>
                                <li><Link to="/login">Ingresá</Link></li>
                                <li><Link to="/register">Creá tu Cuenta</Link></li>
                            </ul>
                        </li>
                        
                        
                    </ul>
                    <CartWidget/>
                    <button onClick={handleMenu} className={menuHamburguesa}><img src="assets/img/icons/menu.svg" alt="" /></button>
                </nav>
            </div>
        </header>
        
    )
}