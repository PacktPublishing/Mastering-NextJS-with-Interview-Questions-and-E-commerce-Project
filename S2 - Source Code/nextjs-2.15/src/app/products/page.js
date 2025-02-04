import Link from 'next/link';

export default function Products(){

    return(
        <>
            <h1> This is the Products Page. </h1>
            <Link href="/products/apple"> Apple </Link>
            <Link href="/products/orange"> Orange </Link>
        </>
    )
}