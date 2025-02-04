import { CloseIcon } from "../icons";

const DeleteConfirmationModal = ()=>{

    return(
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50"/>
            <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                <div className="relative text-center bg-white rounded-lg shadow-lg p-5">
                    <button type="button" className="close-icon-button">
                        <CloseIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal;