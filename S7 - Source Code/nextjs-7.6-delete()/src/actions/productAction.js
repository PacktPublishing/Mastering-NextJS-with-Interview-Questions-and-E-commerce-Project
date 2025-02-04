"use server";

import { db } from "@/db";
import sqlite from "better-sqlite3";
import { revalidatePath, revalidateTag } from "next/cache";
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