import Image from "next/image";
import Link from "next/link";
import { HomeIcon, ShoppingBagIcon, SwatchIcon, UsersIcon } from "../icons";

export default function Sidebar(){
    const menuItems = [
        {text:"Dashboard", url:"/", icon:<HomeIcon/>},
        {text:"Users" , url:"/users", icon:<UsersIcon/>},
        {text:"Product Type", url:"/product-type", icon:<SwatchIcon/>},
        {text:"Products", url:"/products", icon:<ShoppingBagIcon/>}
    ]

    return(
        <div className="sidebar-main">
            <div className="p-4 m-4">
                <h1 className="text-3xl font-semibold">eStore</h1>
            </div>

            <ul className="mx-auto text-lg flex flex-col">
                {
                    menuItems.map((menuItem, key)=>{
                        return(
                            <li>
                                <Link href={menuItem.url}>
                                    <div className="sidebar-list-item"> 
                                        <span className="mx-2">{menuItem.icon}</span>
                                        {menuItem.text}
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="sidebar-usercard">
                <div className="flex flex-row m-5 mb-8">
                    <Image
                        height={50}
                        width={50}
                        src="./user.svg"
                        alt="User Avatar"
                        radius="sm"
                        className="border-gray-600 rounded-full border-2"
                    />
                    <div className="m-auto text-lg"> John Doe </div>
                </div>
            </div>
        </div>
    )
}