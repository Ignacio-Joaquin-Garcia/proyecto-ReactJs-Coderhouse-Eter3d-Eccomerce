import { useState, useEffect } from 'react';
import { CartWidget } from '../components/CartWidget';


export function Navbar() {
    const [scrollBar, setScrollBar] = useState("");
    
    


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
    },[])


    return (
        <header className={scrollBar}>
            <img src="assets/img/logo.png" alt="Logo" />
            <div className="search">
                <input type="text" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Ingresá</a></li>
                    <li><a href="#">Creá tu Cuenta</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
        
    )
}