"use client";

import { useState } from "react";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import Link from "next/link";


const Products = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectProduct, setSelectedProduct] = useState();

    const handleDelete = async ()=>{
        await deleteUser(selectedId);
        setIsDeleteModalOpen(false);
        setSelectedId(undefined);
    }

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-3xl p-2"> Products Management </h1>
                <button>
                    <Link
                        href='/products/add'
                        className="custom-primary-btn"
                    >
                        Add Product
                    </Link>
                </button>
            </div>

            <hr className="my-5" />

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th>Product</th>
                            <th>Product Type</th>
                            <th>MRP</th>
                            <th>Selling Price</th>
                            <th>Current Stock</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                        
                    </tbody>
                </table>

                {
                    isDeleteModalOpen && (
                        <DeleteConfirmationModal
                            setIsOpen={setIsDeleteModalOpen}
                            onCancel={() => setIsDeleteModalOpen(false)}
                            handleConfirm={handleDelete}
                        />
                    )
                }
            </div>

        </div>
    )
};

export default Products;