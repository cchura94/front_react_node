import { Outlet } from "react-router-dom"

const SitioLayout = () => {
    return (
        <>
        <h1>Layout para Sitio Web</h1>
            <Outlet />
        </>
    )
}

export default SitioLayout;