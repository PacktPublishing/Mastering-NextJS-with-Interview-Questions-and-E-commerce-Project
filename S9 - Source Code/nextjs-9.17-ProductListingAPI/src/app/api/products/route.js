import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const products = await db.product.findMany({
            include:{
                productType : true
            }
        });
        return NextResponse.json({
            status:200,
            message:"Products fetched successfully!",
            data:products
        })
    } catch(error){
        return NextResponse.json({
            message: "Something Went Wrong.",
            error: error.message,
        },{
            status:500
        })
    }

}