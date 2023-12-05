import { useEffect, useState } from "react"
import pedidoService from "../../../services/pedido.service"
import TablePagination from "../../../components/TablePagination"

const ListaPedido = () => {

    const [pedidos, setPedidos] = useState([])

    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)
    const [modalOpen, setModalOpen] = useState(false)

    const columnas = [
        { key: "id", label: "id" },
        { key: "fecha", label: "Fecha" },
        { key: "observacion", label: "observacion" },
        { key: "estado", label: "estado" },
        { key: "Cliente.nombre_completo", label: "Cliente"}
    ]

    useEffect(() => {

        getPedidos()
    }, []);

    const getPedidos = async (nroPage = 1, limit = 5) => {
        setPage(nroPage)
        const { data } = await pedidoService.listar(nroPage, limit)
        console.log(data)
        setPedidos(data.rows);
        setTotal(data.count)
    }

    return <>
        <TablePagination datos={pedidos} total={total} columnas={columnas} page={page} fetchData={getPedidos}></TablePagination>


        
    
    </>
}

export default ListaPedido