import { Input } from "../components/Input"
import { Button } from "../components/Button"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom"

export function Login() {
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(gmail === "admin@admin.com" && password === "adminAdmin"){
            navigate("/agregar-prod");
            console.log("hola Admin");
        }
    }


    return (
        <main>
            <div className="login-component">
                <div>
                    <img src="assets/img/icons/user.svg" alt="" />
                    <h1>Iniciar Sesion</h1>
                </div>
                <div className="inputs">
                    <Input onChange={(e) => setGmail(e.target.value)} placeholder="Gmail" type="text" id={1}/>
                    <img src="assets/img/icons/gmail.svg" alt="gmail" />
                </div>
                <div className="inputs">
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="text"/>
                    <img src="assets/img/icons/password.svg" alt="password" id={2}/>
                </div>
                <Button text="Iniciar Sesion" onClick={handleLogin}/>
                <div>
                    <p>¿Todavia no tenes cuenta?</p>
                    <Link to="/register">Registrate</Link>
                </div>
            </div>
        </main>
    )
}