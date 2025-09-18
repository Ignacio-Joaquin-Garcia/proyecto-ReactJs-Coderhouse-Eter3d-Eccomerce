import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { UserDataContext } from "../context/UserDataContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { getUsers } from "../firebase";
import toast from "react-hot-toast";

export function Login() {
    const [dataUsers, setDataUsers] = useState([])
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const userContext = useContext(UserDataContext);

    useEffect(()=>{
        async function gettingUsers(){
            const users = await getUsers();
            setDataUsers(users);
        }
        gettingUsers()
    },[]);
    
    const handleLogin = ()=>{
        let couldEnter = false;
        dataUsers.forEach(user => {
            if(gmail === user.email && password === user.contraseña){
                toast.success("Bienvenido "+ user.usuario);
                couldEnter = true;
                const userLog = {id:user.id, usuario: user.usuario, email: user.email, contraseña: user.contraseña};
                userContext.logUser(userLog)
            } 
            if(user.id === "iQvBkge6R4NloJd4WSfc"){
                navigate("/agregar-prod");
            }
            
        });
        if(!couldEnter){
            toast.error("Datos Erroneos")
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
                    <Input onChange={(e) => setGmail(e.target.value)} placeholder="Email" type="email" id={1}/>
                    <img src="assets/img/icons/gmail.svg" alt="gmail" />
                </div>
                <div className="inputs">
                    <Input onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="text" id={2}/>
                    <img src="assets/img/icons/password.svg" alt="password" />
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