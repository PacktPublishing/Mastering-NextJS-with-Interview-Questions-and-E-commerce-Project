"use client";

import { getUniqueUser, updateUser } from "@/actions/userActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const EditUser = async ({ params }) => {
    const id = parseInt(params.userId);
    const userData = await getUniqueUser(id);

    return (
        <div>
            <h1 className="text-3xl font-semibold p-2"> Edit User </h1>

            <form
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                action={(formData)=>updateUser(formData, params.userId)}
            >
                {
                    // errorMessage && (
                    //     <div
                    //         className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit"
                    //     >
                    //         <span
                    //             className="text-red-500 col-span-2 text-mg my-0 font-500"
                    //         >{errorMessage}</span>
                    //     </div>
                    // )
                }
                <div className="grid gap-2">
                    <Label required={true}>Username</Label>
                    <Input 
                        placeholder="Enter Username" 
                        name="userName" 
                        defaultValue={userData.userName}
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>User Type</Label>
                    <select 
                        className="custom-input appearance-none cursor-pointer" name="userType"
                        defaultValue={userData.userType}
                    >
                        <option value="">Select User Type</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label>Reset Password</Label>
                    <Input placeholder="Example@123" name="password" />
                </div>
                <div className="grid gap-2">
                    <Label>Confirm Password</Label>
                    <Input placeholder="Re-enter the Password" name="confirmPassword" />
                </div>

                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}

export default EditUser;