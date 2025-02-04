import { db } from "@/lib/db";
import { jwtTokenVerification } from "./authActions";

export async function getBuyers(){
    await jwtTokenVerification();
    const buyers = await db.buyerMaster.findMany({
        where: {
            sales: {
                some: {}
            }
        }
    });

    return buyers;
}