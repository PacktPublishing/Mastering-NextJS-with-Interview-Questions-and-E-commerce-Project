import Link from "next/link";
import headerStyles from "./header.module.css";

export default function Header() {

    return (
        <>
            <div id={headerStyles.navbar}>
                <Link href="/"> Products </Link>
                <Link href="/add-product"> Add Product </Link>                
            </div>
        </>
    )
}