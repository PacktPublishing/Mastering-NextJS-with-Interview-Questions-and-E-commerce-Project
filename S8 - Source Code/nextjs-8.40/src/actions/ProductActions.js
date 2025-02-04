"use server";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function createProduct(formData){
    const data = {
        name : formData.get("name"),
        description : formData.get("description"),
        sellPrice : formData.get("sellPrice"),
        mrp : formData.get("mrp"),
        smallSize : formData.get("smallSize"),
        mediumSize : formData.get("mediumSize"),
        largeSize : formData.get("largeSize"),
        productTypeId : formData.get("productType"),
        isActive : formData.get("isActive") ,
    };

    const productType = await db.productType.findUnique({
        where : {
            id: parseInt(data.productTypeId)
        }
    })
    if(!productType){
        return redirect(`/product/add?errorMessage=Product Type not found. Please try with different product type.`)
    }
}