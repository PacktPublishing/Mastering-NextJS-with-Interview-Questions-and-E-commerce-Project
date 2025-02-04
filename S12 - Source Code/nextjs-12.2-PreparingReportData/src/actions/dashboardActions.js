import { db } from "@/lib/db";

export async function getDashboardData(){
    const customerData = await db.buyerMaster.findMany({
        orderBy: {
            createdAt: "asc"
        },
        include: {
            sales: true
        }
    });
    const totalBuyers = customerData?.filter((customer)=>customer.sales?.length>0).length;
    
    const dashboardData = {
        totalBuyers,
        totalCustomers: customerData.length
    };

    return dashboardData;
}