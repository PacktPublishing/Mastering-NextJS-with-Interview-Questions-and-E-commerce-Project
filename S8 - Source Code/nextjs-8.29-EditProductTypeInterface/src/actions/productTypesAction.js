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