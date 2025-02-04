import { getProductById } from "@/actions/productActions";
import Product from "@/screens/product";


const ProductPage = async ({params})=>{
    const {productId} = params;
    const product = await getProductById(productId);

    return(
        <>
            <Product product={product?.data}/>
        </>
    )
}

export default ProductPage;