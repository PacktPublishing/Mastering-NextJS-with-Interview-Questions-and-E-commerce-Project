import Link from 'next/link';
import getProducts from '../../../database/products';

export default async function Products() {

    const products = getProducts();
    console.log(products);

    return (
        <>
            <h1> This is the Products Page. </h1>
            <Link href="/products/apple"> Apple </Link>
            <Link href="/products/orange"> Orange </Link>
            <div style={{margin:"4em"}}>
                {JSON.stringify(products)}
            </div>
        </>
    )
}