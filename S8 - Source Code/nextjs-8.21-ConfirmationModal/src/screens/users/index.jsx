"use client";

import { DeleteIcon, EditIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { deleteUser } from "@/actions/userActions";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";

export default async function UsersScreen({users}){

    const handleDelete = async (selectedId)=>{
        await deleteUser(selectedId);
    }

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
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                        {
                            users.map((user, key)=>(
                                <tr key={user.id}>
                                    <td>{key+1}</td>
                                    <td>{user.userName}</td>
                                    <td className="flex items-center gap-x-3">
                                        <Link 
                                            href={`/users/edit/${user.id}`}
                                            className="w-fit"
                                        >
                                            <EditIcon/>
                                        </Link>
                                        <Button 
                                            className="bg-transparent p-0 px-2 border-none text-red-500"
                                            onClick={()=>handleDelete(user.id)}
                                        >
                                            <DeleteIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <DeleteConfirmationModal/>
            </div>

        </div>
    )
}