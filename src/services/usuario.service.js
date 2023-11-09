import api from "./api"

const usuarioService = {
    listar: () => {
        return api.get("/v1/admin/usuario");
    },
    guardar: (datos) => {
        return api.post("/v1/admin/usuario", datos);
    },
    mostrar: (id) => {
        return api.get(`/v1/admin/usuario/${id}`);
    },
    mofificar: (id, datos) => {
        return api.put(`/v1/admin/usuario${id}`, datos);
    },
    eliminar: () => {
        return api.delete(`/v1/admin/usuario/${id}`);
    }
}

export default usuarioService;