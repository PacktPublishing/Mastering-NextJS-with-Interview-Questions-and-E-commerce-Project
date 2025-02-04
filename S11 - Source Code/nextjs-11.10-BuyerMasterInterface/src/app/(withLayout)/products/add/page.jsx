import AddProducts from "@/screens/products/add";
import { getProductTypes } from "@/actions/productTypesAction";

const AddProductPage = async ({searchParams})=>{
    const productTypes = await getProductTypes();

    return(
        <>
            <AddProducts 
                searchParams={searchParams}
                productTypes={productTypes}
            />
        </>
    )
}

export default AddProductPage;