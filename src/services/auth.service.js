import api from "./api"

const authService = {
    loginConNode: (credenciales) => {
        return api.post("/v1/auth/login", credenciales);
    },

    registroConNode: (datos) => {
        return api.post("/v1/auth/register", datos);
    },
    salirConNode: (datos) => {
        return api.post("/v1/auth/logout");
    }
}

export default authService