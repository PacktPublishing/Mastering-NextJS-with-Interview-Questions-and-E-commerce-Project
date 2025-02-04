import { SearchIcon, UserIcon, CartIcon } from "@/app/icons";

const Header = ()=>{

    return(
        <div className="navbar">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">MyStore</h1>

                    <div className="relative w-full max-w-lg">
                        <SearchIcon className="absolute left-2 top-2"/>
                        <input
                            placeholder="Search Product..."
                            className="custom-input"
                        />
                    </div>

                    <div className="flex gap-3">
                        <CartIcon/>
                        <UserIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;