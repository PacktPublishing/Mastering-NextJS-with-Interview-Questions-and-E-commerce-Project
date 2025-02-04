"use client";

import { useState } from "react";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import Link from "next/link";
import Image from "next/image";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { deleteProduct } from "@/actions/ProductActions";


const Products = ({products}) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectProduct, setSelectedProduct] = useState();

    const handleDelete = async () => {
        await deleteProduct(selectProduct);
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
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
                        {
                            products.map((product)=>(
                                <tr key={product.id}>
                                    <td className="grid grid-cols-[auto_1fr] gap-3">
                                        <Image
                                            src={"/"+product.image}
                                            alt={product.name}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-20 h-20 object-cover"
                                        />
                                        <div className="flex flex-col self-center">
                                            <span>{product.name}</span>
                                            <span className="text-sm text-gray-500 truncate max-w-52">
                                                {product.description}
                                            </span>
                                        </div>
                                    </td>
                                    <td>{product.productType.name || "-"}</td>
                                    <td>${product.mrp || "0"}</td>
                                    <td>${product.sellPrice || "0"}</td>
                                    <td>{product.currentStock || "0"}</td>
                                    <td 
                                        className={cn(product.isActive ? "text-green-500" : "text-red-500")}
                                    >
                                        {product.isActive ? "Active" : "Inactive"}
                                    </td>
                                    <td>
                                        <div className="flex self-center gap-x-3">
                                            <Link
                                                href={`/products/edit/${product.id}`}
                                                className="w-fit"
                                            >
                                                <EditIcon />
                                            </Link>
                                            <Button
                                                className="bg-transparent p-0 px-2 border-none text-red-500"
                                                onClick={() => {
                                                    setIsDeleteModalOpen(true);
                                                    setSelectedProduct(product);
                                                }}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
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