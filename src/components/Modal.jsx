const Modal = (props) => {

    return (
        <>
            {props.modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-lg p-6 w-2/3 md:w-1/3 xl:w-1/3 relative">
                        <h2>{props.titulo}</h2>
                        {props.children}

                        <button className="bg-gray-300 hover:bg-gray-400 rounded py-2 px-4 mt-4 absolute top-0 right-0 mr-4 mt-4" onClick={() => props.setModalOpen(false)}>X</button>
                    </div>

                </div>
            )
            }
        </>
    )
}

export default Modal;