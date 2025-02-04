"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createProductType(formData){
    const data = {
        name : formData.get("name"),
    }

    const existingProductType = await db.productType.findUnique({
        where:{
            name: data.name
        }
    });

    if(existingProductType){
        return redirect(`/product-type/add?errorMessage=Product Type already exists.`);
    }

    await db.productType.create({
        data : {
            name : data.name
        }
    })

    revalidatePath("/product-type", "page");
    redirect("/product-type");
}

export async function getProductTypes(){
    const productTypes = await db.productType.findMany();
    return productTypes;
}

export async function getUniqueProductType(productTypeId){
    const productType = await db.productType.findUnique({
        where : {
            id : parseInt(productTypeId)
        }
    })

    return productType;
}

export async function updateProductType(formData, productTypeId){
    const data = {
        name : formData.get("name")
    };

    await db.productType.update({
        where : {
            id : parseInt(productTypeId)
        },
        data : {
            name : data.name
        }
    });

    revalidatePath("/product-type", "page");
    redirect("/product-type");
}

export async function deleteProductType(productTypeId){
    await db.productType.delete({
        where : {
            id : productTypeId
        }
    });

    revalidatePath("/product-type", "page");
}