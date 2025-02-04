import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request){
    try{
        const {searchParams} = new URL(request.url);

        const filters = {
            productTypeId : searchParams.get("productTypeId"),
            sortBy: searchParams.get("sortBy"),
            minPrice: searchParams.get("minPrice")
                ? Number(searchParams.get("minPrice"))
                : undefined,
            maxPrice: searchParams.get("maxPrice")
                ? Number(searchParams.get("maxPrice"))
                : undefined,
            rating: searchParams.get("rating")
                ? Number(searchParams.get("rating"))
                : undefined,
            inStock: searchParams.get("inStock")
                ? searchParams.get("inStock")
                : undefined,
            search: searchParams.get("search"),
        }

        const whereClause = {
            ...(filters.productTypeId
                ?{
                    productTypeId: Number(filters.productTypeId),
                }
                : {}
            ),
            ...(filters.minPrice || filters.maxPrice
                ?{
                    sellPrice: {
                        gte: filters.minPrice || undefined,
                        lte: filters.maxPrice || undefined,
                    }
                }
                : {}
            ),
            ...(filters.rating !== undefined
                ?{
                    rating: filters.rating,
                }
                : {}
            ),
            ...(filters.inStock === "true"
                ?{
                    currentStock:{
                        gt: 0
                    }
                } : filters.inStock === "false"
                ? {
                    currentStock: 0
                }
                : {}
            ),
            ...(filters.search
                ? {
                    name: {
                        contains: filters.search.toLocaleLowerCase(),
                    }
                }
                : {}
            ),
        }

        const products = await db.product.findMany({
            include:{
                productType : true
            },
            where: {...whereClause, isActive: true},
            orderBy: {
                sellPrice:
                    filters.sortBy === "sellPrice"
                        ? "asc"
                    :filters.sortBy === "-sellPrice"
                        ? "desc"
                    :undefined
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