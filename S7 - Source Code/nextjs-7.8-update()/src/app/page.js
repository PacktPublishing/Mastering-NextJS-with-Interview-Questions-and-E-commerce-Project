import ProductCard from '@/components/ProductCard';
import { db } from '@/db';

export default async function Products() {
    const products = await db.products.findMany();

    return (
        <>
            <div className='grid grid-cols-4 gap-y-12 gap-x-14 mx-24 my-12'>
                {
                    products.map((prod, key)=>{
                        return(
                            <ProductCard product={prod} key={key}/>
                        )
                    })
                }
            </div>
        </>
    )
}