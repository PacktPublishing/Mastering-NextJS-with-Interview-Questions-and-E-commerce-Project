import Link from "next/link";

export default async function UsersScreen(){

    return(
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-3xl p-2"> User Management </h1>
                <button>
                    <Link
                        href='/users/add'
                        className="custom-primary-btn"
                    >
                        Add User
                    </Link>
                </button>
            </div>

            <hr className="my-5"/>

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th> Sr. No.</th>
                            <th>User Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>

        </div>
    )
}