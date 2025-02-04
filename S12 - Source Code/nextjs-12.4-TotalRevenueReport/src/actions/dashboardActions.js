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
    const salesMasterData = await db.salesMaster.findMany();
    
    const totalBuyers = customerData?.filter((customer)=>customer.sales?.length>0).length;
    const totalRevenue = salesMasterData.reduce(
        (acc, sale) => acc+sale.grandTotalPrice,
        0
    );

    const dashboardData = {
        totalBuyers,
        totalCustomers: customerData.length,
        totalRevenue,
    };

    return dashboardData;
}