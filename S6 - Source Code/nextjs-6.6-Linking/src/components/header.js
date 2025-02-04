import Link from "next/link";

export default function Header(){

    return(
        <div>
            <Link href="/"> Home </Link>
            <Link href="/products"> Products </Link>
            <Link href="/products/apple"> Apple </Link>
        </div>
    )
}