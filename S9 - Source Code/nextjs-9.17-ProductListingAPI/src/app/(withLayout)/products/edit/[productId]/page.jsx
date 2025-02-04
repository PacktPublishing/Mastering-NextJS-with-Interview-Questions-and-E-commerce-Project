import { getUniqueProduct } from "@/actions/ProductActions";
import { getProductTypes } from "@/actions/productTypesAction";
import EditProduct from "@/screens/products/edit";


const EditProductPage = async ({searchParams, params})=>{
    const productTypes = await getProductTypes();
    const product = await getUniqueProduct(params.productId);

    return(
        <div>
            <EditProduct
                searchParams = {searchParams}
                productTypes = {productTypes}
                product = {product}
            />
        </div>
    );
};

export default EditProductPage;