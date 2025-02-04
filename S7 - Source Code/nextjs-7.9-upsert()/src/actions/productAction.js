"use server";

import { db } from "@/db";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export async function deleteProduct(productId){
    
    await db.products.delete({
        where:{
            id : productId
        }
    })

    revalidateTag('revalTag');
    redirect('/');
}