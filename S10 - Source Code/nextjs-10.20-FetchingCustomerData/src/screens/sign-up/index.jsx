import { registerUser } from "@/actions/authActions";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Link from "next/link";

const SignUp = ({searchParams}) => {
    const {errorMessage} = searchParams;

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-100 bg-white">
                <h1 className="text-4xl font-medium text-center mb-7">SignUp</h1>
                {
                    errorMessage && (
                        <div className="border border-red-500 rounded-xl p-3 bg-red-50 w-ful text-center my-3">
                            <span className="text-red-500 text-lg font-500">
                                {errorMessage}
                            </span>
                        </div>
                    )
                }
                <form className="grid gap-6" action={registerUser}>
                    <div className="grid gap-2">
                        <Label required>Name</Label>
                        <Input
                            type="text"
                            placeholder="Enter your Name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label required>Email</Label>
                        <Input
                            type="email"
                            placeholder="Enter your Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label required>Password</Label>
                        <Input
                            type="password"
                            minLength={8}
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                    <div className="text-center">
                        <span className="text-base font-medium">
                            Already have an account?
                            <Link
                                href="/login"
                                className="text-blue-600 font-semibold mx-1 hover:underline"
                            >Login</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;