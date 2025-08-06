import { CartWidget } from '../components/CartWidget';


export function Navbar() {
    
    return (
        <header>
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