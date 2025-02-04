import Link from "next/link";
import headerStyles from "./header.module.css";

export default function Header() {

    return (
        <>
            <div id={headerStyles.navbar} className="text-2xl font-sans font-medium">
                <Link href="/"> Products </Link>
                <Link href="/add-product"> Add Product </Link>                
            </div>
        </>
    )
}