import { getUniqueProductType } from "@/actions/productTypesAction";
import EditProductType from "@/screens/product-type/edit";


const EditProductTypePage = async ({params, searchParams})=>{
    const productType = await getUniqueProductType(params.productTypeId);

    return(
        <>
            <EditProductType 
                searchParams={searchParams}
                productType={productType}    
            />
        </>
    )
}

export default EditProductTypePage;