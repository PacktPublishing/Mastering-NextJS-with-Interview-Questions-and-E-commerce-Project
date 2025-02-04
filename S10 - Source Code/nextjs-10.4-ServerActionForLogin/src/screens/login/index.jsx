import { loginUser } from "@/actions/authActions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const Login = ()=>{

    return(
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-100 bg-white">
                <h1 className="text-4xl font-medium text-center mb-7">Admin Login</h1>
                <form className="grid gap-6" action={loginUser}>
                    <div className="grid gap-2">
                        <Label required>UserName</Label>
                        <Input
                            type="text"
                            placeholder="Enter UserName"
                            name="userName"
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
                </form>
            </div>
        </div>
    )
}

export default Login;