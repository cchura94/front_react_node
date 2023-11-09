import { useEffect, useState } from "react";
import usuarioService from "../../services/usuario.service";


const Usuario = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        const {data} = await usuarioService.listar()
        setUsuarios(data);
    }

    return (
        <>
            <h1>Lista de Usuarios</h1>
            {JSON.stringify(usuarios)}

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
                        <tr>
                            <td>{ user.id }</td>
                            <td>{ user.email }</td>
                            <td>{ user.username }</td>
                            <td>
                                <button>editar</button>
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