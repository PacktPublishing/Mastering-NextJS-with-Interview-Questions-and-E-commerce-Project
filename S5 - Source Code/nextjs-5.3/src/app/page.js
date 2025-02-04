import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import getProducts from '../../database/products';

export const dynamic = 'force-dynamic';

export default async function Products() {
    const products = getProducts();

    return (
        <>
            <div className='grid grid-cols-4 gap-y-12 gap-x-14 mx-24 my-12'>
                {
                    products.map((prod)=>{
                        return(
                            <ProductCard product={prod}/>
                        )
                    })
                }
            </div>
        </>
    )
}