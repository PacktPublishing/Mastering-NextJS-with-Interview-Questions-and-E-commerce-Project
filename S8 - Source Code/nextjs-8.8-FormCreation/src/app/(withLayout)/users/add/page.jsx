export default function(){
    
    return(
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add User </h1>

            <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2">
                <div className="grid gap-2">
                    <div className="text-sm lg:text-base h-fit">
                        <label>Username</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="custom-input"
                    />
                </div>
                <div className="grid gap-2">
                    <div className="text-sm lg:text-base h-fit">
                        <label>User Type</label>
                    </div>
                    <select className="custom-input bg-white cursor-pointer">
                        <option value="">Select User Type</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <div className="text-sm lg:text-base h-fit">
                        <label>Password</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Example@123"
                        className="custom-input"
                    />
                </div>
                <div className="grid gap-2">
                    <div className="text-sm lg:text-base h-fit">
                        <label>Confirm Password</label>
                    </div>
                    <input
                        type="text"
                        placeholder="Re-enter password"
                        className="custom-input"
                    />
                </div>

                <button className="custom-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    )
}