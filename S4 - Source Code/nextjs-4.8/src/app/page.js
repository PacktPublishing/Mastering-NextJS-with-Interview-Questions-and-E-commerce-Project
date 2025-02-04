import Link from 'next/link';
import getProducts from '../../database/products';

export default async function Products() {
    const products = getProducts();

    return (
        <>
            <h1> This is the Products Page. </h1>
            <div style={{margin:"4em"}}>
                {
                    products.map((prod)=>{
                        return(
                            <div style={{margin:"1em"}}>
                                <Link href={"/product-details/"+prod.name}> {prod.name} </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}