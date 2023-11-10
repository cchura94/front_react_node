import react, {useState, useEffect} from "react"
import authService from "./../../services/auth.service"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const subtitulo = "Ingrese sus credenciales"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function funIngresar(){
        const credenciales = {
            email: email,
            password: password
        }
        console.log(credenciales)
        try {
            const {data} = await authService.loginConNode(credenciales)
            console.log(data)
            localStorage.setItem("access_token",data.access_token )

            navigate("/usuario")
            
        } catch (error) {
            console.log(error);
            alert("Credenciales incorrectas!!");
        }
    }

    return (
        <div>
            <h1>Login (Ingresar)</h1>
            <h2>{ subtitulo }</h2>
            
                <label htmlFor="e">Ingrese su Correo:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="e">Ingrese su Contraseña:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="button" value="Ingresar" onClick={() => funIngresar()} />
            
        </div>
    )
}

export default Login;