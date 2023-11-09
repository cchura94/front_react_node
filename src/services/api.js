import axios from "axios"

const url_base = "http://127.0.0.1:3000/api"

const api = axios.create({
    baseURL: url_base,
    timeout: 30000
})

// autenticación (header)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if(token){
            config.headers["Authorization"] = "Bearer "+token
        }
        return config
    }
)

// capturar errores (401, 403)
api.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if(error.response.status === 401){
            localStorage.removeItem("access_token");
            // window.location.href = "/login"
        }
        if(error.response.status === 403){
            window.location.href = "/no-autoerizado"
        }
        return Promise.reject(error)
    }
)

//
const apiService = {
    get: (url, params) => api.get(url, {params}),
    post: (url, data) => api.post(url, data),
    put: (url, data) => api.put(url, data),
    delete: (url) => api.delete(url),
}

export default apiService