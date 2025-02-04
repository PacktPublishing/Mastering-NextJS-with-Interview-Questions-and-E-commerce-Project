"use client";

import { useState } from "react";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import Link from "next/link";
import Image from "next/image";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";


const Products = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectProduct, setSelectedProduct] = useState();

    const handleDelete = async () => {
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
                        <tr>
                            <td className="grid grid-cols-[auto_1fr] gap-3">
                                <Image
                                    src="/vercel.svg"
                                    alt="Product Image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-20 h-20"
                                />
                                <div className="flex flex-col self-center">
                                    <span>Product Name</span>
                                    <span className="text-sm text-gray-500 truncate max-w-52">
                                        This is the Product Description with truncate.
                                    </span>
                                </div>
                            </td>
                            <td>Kid's Clothing</td>
                            <td>$9.99</td>
                            <td>$7.99</td>
                            <td>50</td>
                            <td className="text-green-500">Active</td>
                            <td>
                                <div className="flex self-center gap-x-3">
                                    <Link
                                        href={`/product-type/edit/1`}
                                        className="w-fit"
                                    >
                                        <EditIcon />
                                    </Link>
                                    <Button
                                        className="bg-transparent p-0 px-2 border-none text-red-500"
                                        onClick={() => {
                                            setIsDeleteModalOpen(true);
                                            setSelectedProduct({});
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </div>
                            </td>
                        </tr>
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