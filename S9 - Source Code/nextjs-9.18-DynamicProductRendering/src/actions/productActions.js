"use server";

export async function getProducts(){
    const BASE_URL = process.env.BASE_URL;
    const res = await fetch(`${BASE_URL}/api/products`);
    const data = await res.json();
    console.log(data);

    return data;
}