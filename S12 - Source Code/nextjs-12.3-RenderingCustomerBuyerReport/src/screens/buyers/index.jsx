
const Buyers = ({buyers}) => {

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-3xl p-2"> Buyer Management </h1>
            </div>

            <hr className="my-5" />

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th> Sr. No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                        {
                            buyers.length > 0 ? (
                                buyers.map((buyer, key) => (
                                    <tr key={buyer.id}>
                                        <td>{key + 1}</td>
                                        <td>{buyer.customerName}</td>
                                        <td>{buyer.email}</td>
                                        <td>{buyer.address}</td>
                                        <td>{buyer.city}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="!text-center">
                                        No Buyers Found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Buyers;