import { createUser } from "@/actions/userActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function AddUser({searchParams}){

    const {errorMessage} = searchParams;


    return(
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add User </h1>

            <form 
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
                action={createUser}    
            >
                {
                    errorMessage && (
                        <div 
                            className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit"
                        >
                            <span
                                className="text-red-500 col-span-2 text-mg my-0 font-500"
                            >{errorMessage}</span>
                        </div>
                    )
                }
                <div className="grid gap-2">
                    <Label required={true}>Username</Label>
                    <Input placeholder="Enter Username" name="userName"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>User Type</Label>
                    <select className="custom-input appearance-none cursor-pointer" name="userType">
                        <option value="">Select User Type</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Password</Label>
                    <Input placeholder="Example@123" name="password"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Confirm Password</Label>
                    <Input placeholder="Re-enter the Password" name="confirmPassword"/>
                </div>

                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}