"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeIcon, LogoutIcon, ShoppingBagIcon, SwatchIcon, UsersIcon } from "../icons";
import { Button } from "../ui/Button";
import { logoutUser } from "@/actions/authActions";

export default function Sidebar({userData}){
    const menuItems = [
        {text:"Dashboard", url:"/", icon:<HomeIcon/>},
        {text:"Users" , url:"/users", icon:<UsersIcon/>},
        {text:"Product Type", url:"/product-type", icon:<SwatchIcon/>},
        {text:"Products", url:"/products", icon:<ShoppingBagIcon/>},
        {text:"Buyers", url:"/buyers", icon:<UsersIcon/>}
    ];

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
                <div className="flex flex-row m-5 mb-8 items-center">
                    <Image
                        height={50}
                        width={50}
                        src="/user.svg"
                        alt="User Avatar"
                        radius="sm"
                        className="border-gray-600 rounded-full border-2"
                    />
                    <div className="m-auto text-lg"> {userData.userName} </div>
                    <Button 
                        className="bg-transparent text-black p-0"
                        onClick={()=>logoutUser()}  
                    >
                        <LogoutIcon className="h-7 w-7"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}