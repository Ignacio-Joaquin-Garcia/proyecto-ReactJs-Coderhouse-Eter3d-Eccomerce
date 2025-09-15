import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { createUser } from "../firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast";

export function Register() {
    const [user, setUser] = useState("");
    const [gmail, setGmail] = useState("");
    const [confirmGmail, setConfirmGmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleUserRegister = (e)=>{
        e.preventDefault()
        if((user != "") && (gmail === confirmGmail) && (password === confirmPassword)){
            createUser(user, gmail, password);
            navigate("/login")
        } else{
            toast.error("Revise los datos Ingresados");
        }
    }

    return (
        <main>
            <form onSubmit={handleUserRegister} >
                <div className="login-component">
                    <div>
                        <img src="assets/img/icons/user.svg" alt="User Icon" />
                        <h1>Registrarse</h1>
                    </div>
                    <div className="inputs">
                        <Input onChange={(e) => setUser(e.target.value)} placeholder="Nombre Usuario" type="text" id={1}/>
                        <img src="assets/img/icons/user.svg" alt="User Icon" />
                    </div>
                    <div className="inputs">
                        <Input onChange={(e) => setGmail(e.target.value)} placeholder="Email" type="email" id={2}/>
                        <img src="assets/img/icons/gmail.svg" alt="gmail" />
                    </div>
                    <div className="inputs">
                        <Input onChange={(e) => setConfirmGmail(e.target.value)} placeholder="Confirmar Email" type="email" id={3}/>
                        <img src="assets/img/icons/gmail.svg" alt="gmail" />
                    </div>
                    <div className="inputs">
                        <Input onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" id={4}/>
                        <img src="assets/img/icons/password.svg" alt="password" />
                    </div>
                    <div className="inputs">
                        <Input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" type="password" id={5}/>
                        <img src="assets/img/icons/password.svg" alt="password" />
                    </div>
                    <Button text="Registrarse" type="submit"/>
                    <div>
                        <p>¿Ya estas Registrado?</p>
                        <Link to="/login">Iniciar Sesion</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}