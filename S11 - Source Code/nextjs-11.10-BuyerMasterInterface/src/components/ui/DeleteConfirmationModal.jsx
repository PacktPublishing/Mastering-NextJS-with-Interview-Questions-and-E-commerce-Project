import { CloseIcon, DeleteIcon } from "../icons";
import { Button } from "./Button";

const DeleteConfirmationModal = ({setIsOpen, onCancel, handleConfirm})=>{
    const closeModal = ()=>{
        setIsOpen(false);
    }

    return(
        <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}/>
            <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
                <div className="relative text-center bg-white rounded-lg shadow-lg p-5">
                    <button type="button" className="close-icon-button" onClick={closeModal}>
                        <CloseIcon/>
                    </button>
                    <div className="flex items-center justify-center text-red-500">
                        <DeleteIcon className="h-16 w-16"/>
                    </div>
                    <p className="my-6 font-semibold text-xl">
                        Are you sure you want to delete?
                    </p>
                    <div className="flex justify-end items-center space-x-4">
                        <Button
                            type="button"
                            className="bg-transparent text-black borer border-gray-600"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit"
                            onClick={handleConfirm}
                        >
                            Confrim
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmationModal;