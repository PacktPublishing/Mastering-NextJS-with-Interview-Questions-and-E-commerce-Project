import ProductCard from '@/components/ProductCard';
import getProducts from '../../database/products';

export default async function Products() {
    const products = getProducts();
    const users = await (await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            next:{
                tags:['revalTag']
            }
        }
    )).json();

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