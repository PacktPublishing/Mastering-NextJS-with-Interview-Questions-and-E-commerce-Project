"use client";

import { InformationIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import PurchasedProductsModal from "@/components/ui/PurchasedProductsModal";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

const RecentOrderSection = ({orders}) => {
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <>
            <div className="grid dashboard-card">
                <h1 className="text-2xl font-bold">Recent Orders</h1>
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th> Sr. No.</th>
                            <th>Buyer's Name</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Payment Mode</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                        {
                            orders.length > 0 ? (
                                orders.map((order, key) => (
                                    <tr key={order.id}>
                                        <td>{key + 1}</td>
                                        <td>{order.buyer.customerName}</td>
                                        <td>{formatDate(order.SODateTime)}</td>
                                        <td>{order.grandTotalPrice}</td>
                                        <td>{order.paymentMode}</td>
                                        <td>
                                            <Button
                                                type="button"
                                                className="bg-transparent text-blue-700 p-0"
                                                onClick={()=>{
                                                    setIsProductModalOpen(true);
                                                    setSelectedOrder(order);
                                                }}
                                            >
                                                <InformationIcon/>
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="!text-center">
                                        No Orders Found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                isProductModalOpen && (
                    <PurchasedProductsModal
                        setIsOpen={setIsProductModalOpen}
                        products={selectedOrder?.salesTransactions}
                    />
                )
            }
        </>
    )
}

export default RecentOrderSection;