import { getProductTypes } from "@/actions/productTypesAction";
import EditProduct from "@/screens/products/edit";


const EditProductPage = async ({searchParams})=>{
    const productTypes = await getProductTypes();

    return(
        <div>
            <EditProduct
                searchParams = {searchParams}
                productTypes = {productTypes}
            />
        </div>
    );
};

export default EditProductPage;