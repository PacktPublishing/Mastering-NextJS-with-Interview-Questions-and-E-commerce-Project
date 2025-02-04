import { getProducts } from "@/actions/ProductActions";
import Products from "@/screens/products";


const ProductsManagement = async ()=>{
    const products = await getProducts();

    return(
        <>
            <Products products={products}/>
        </>
    );
};

export default ProductsManagement;