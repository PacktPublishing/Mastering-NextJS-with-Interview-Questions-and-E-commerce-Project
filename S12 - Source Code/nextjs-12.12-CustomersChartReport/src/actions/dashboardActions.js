import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

export async function getDashboardData() {
    const customerData = await db.buyerMaster.findMany({
        orderBy: {
            createdAt: "asc"
        },
        include: {
            sales: true
        }
    });
    const salesMasterData = await db.salesMaster.findMany({
        include: {
            buyer: true,
            salesTransactions: true,
        },
        orderBy: {
            SODateTime: "desc",
        }
    });

    const totalBuyers = customerData?.filter((customer) => customer.sales?.length > 0).length;
    const totalRevenue = salesMasterData.reduce(
        (acc, sale) => acc + sale.grandTotalPrice,
        0
    );
    const salesByDate = salesMasterData.reduce((acc, sale) => {
        const date = formatDate(sale.SODateTime);

        if (!acc[date]) {
            acc[date] = {
                date,
                sales: 0,
            };
        }
        acc[date].sales += sale.grandTotalPrice;

        return acc;
    }, {});
    
    const customersByDate = customerData.reduce((acc, customer)=>{
        const date = formatDate(customer.createdAt);

        if(!acc[date]){
            acc[date] = {
                date,
                count: 0,
            };
        }
        acc[date].count += 1;

        return acc;
    }, {});

    const dashboardData = {
        totalBuyers,
        totalCustomers: customerData.length,
        totalRevenue,
        orders: salesMasterData?.splice(0, 5),
        salesChartData: Object.values(salesByDate).reverse(),
        customerChartData: Object.values(customersByDate),
    };

    return dashboardData;
}