import { useEffect, useState } from "react";
import usuarioService from "../../services/usuario.service";


const Usuario = () => {

    const [usuarios, setUsuarios] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usuario_id, setUsuarioId] = useState("");

    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        const {data} = await usuarioService.listar()
        setUsuarios(data.rows);
    }

    const guardarUsuario = async (e) => {
        console.log("guardando...")
        e.preventDefault();
        try {
            if(usuario_id){
                await usuarioService.mofificar(usuario_id, {username:name, email, password});
            }else{

                await usuarioService.guardar({username:name, email, password});
            }
            getUsuarios()
            setName("")
            setEmail("")
        } catch (error) {
            console.log(error);
        }
    }

    const editarUsuario = (user) => {
        console.log("editando---", user.username)
        setName(user.username);
        setEmail(user.email);
        setUsuarioId(user.id)
    }

    return (
        <>
            <h1>Lista de Usuarios</h1>
            {/*JSON.stringify(usuarios)*/}

            <form onSubmit={(e) => guardarUsuario(e)}>

                <label htmlFor="name">Nombre</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                <br />

                <label htmlFor="co">Correo</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <br />

                <label htmlFor="name">Contraseña</label>
                <input type="password" onChange={e => setPassword(e.target.value)} required />
                <br />

                <input type="submit" />
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CORREO</th>
                        <th>USUARIO</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>{ user.id }</td>
                            <td>{ user.email }</td>
                            <td>{ user.username }</td>
                            <td>
                                <button onClick={() => editarUsuario(user)}>editar</button>
                                <button>eliminar</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </>
    );
}

export default Usuario;