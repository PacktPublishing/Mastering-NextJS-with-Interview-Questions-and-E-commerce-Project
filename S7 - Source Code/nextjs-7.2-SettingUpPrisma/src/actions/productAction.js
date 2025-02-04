"use server";

import sqlite from "better-sqlite3";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
const db = sqlite("products.sqlite");

export async function deleteProduct(productId){
    db.prepare(
        `DELETE FROM products WHERE id=?`
    ).run(productId);

    // revalidatePath('/', 'page');
    revalidateTag('revalTag');
    redirect('/');
}