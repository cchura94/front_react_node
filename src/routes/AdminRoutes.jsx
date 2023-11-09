import AdminLayout from "../layouts/AdminLayout";
import Perfil from "../views/admin/Perfil"
import Usuario from "../views/admin/Usuario";

const AdminRoutes = {
    path: '/',
    element: <AdminLayout />,
    children:[
        {
            path: 'perfil',
            element: <Perfil></Perfil>
        },
        {
            path: 'usuario',
            element: <Usuario></Usuario>
        }
    ]
}

export default AdminRoutes;