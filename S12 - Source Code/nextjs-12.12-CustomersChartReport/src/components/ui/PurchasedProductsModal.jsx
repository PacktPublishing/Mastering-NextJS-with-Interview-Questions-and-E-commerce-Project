import { CloseIcon } from "../icons";

const PurchasedProductsModal = ({ setIsOpen, products }) => {
    const closeModal = () => setIsOpen(false);
    console.log(products);

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal} />
                <div className="relative p-4 w-full max-w-4xl h-full md:h-auto">
                    <div className="relative text-center bg-white rounded-lg shadow-lg p-5">
                        <button type="button" className="close-icon-button" onClick={closeModal}>
                            <CloseIcon />
                        </button>
                        <table className="custom-table mt-5">
                            <thead className="border-y-2 border-gray-400">
                                <tr>
                                    <th> Sr. No.</th>
                                    <th>Product Name</th>
                                    <th>Selling Price</th>
                                    <th>Purchased Quantity</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 font-medium text-lg text-center">
                                {
                                    products.length > 0 ? (
                                        products.map((product, key) => (
                                            <tr key={product.id}>
                                                <td>{key + 1}</td>
                                                <td>{product.productName}</td>
                                                <td>${product.unitPrice}</td>
                                                <td>{product.qtyPurchased}</td>
                                                <td>${product.total}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="!text-center">
                                                No Products Found.
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PurchasedProductsModal;