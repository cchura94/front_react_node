import { Outlet } from "react-router-dom"

const AdminLayout = () => {
    return (
        <>
            <h1>Layout para administración</h1>
            <Outlet />
        </>
    )
}

export default AdminLayout;