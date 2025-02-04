import CustomLineChart from "@/components/CustomLineChart";
import RecentOrderSection from "./RecentOrderSection";

const Dashboard = ({dashboardData})=>{

    return(
        <div className="space-y-5">
            <div className="grid grid-cols-3 gap-5">
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Buyers</h1>
                    <h1 className="text-3xl">{dashboardData?.totalBuyers}</h1>
                </div>
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Customers</h1>
                    <h1 className="text-3xl">{dashboardData?.totalCustomers}</h1>
                </div>
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Revenue</h1>
                    <h1 className="text-3xl">${dashboardData?.totalRevenue.toFixed(2) || 0}</h1>
                </div>
            </div>

            <RecentOrderSection orders={dashboardData.orders}/>

            <div className="w-full dashboard-card">
                <h1 className="text-2xl font-bold">Sales</h1>
                <div className="w-full h-[300px] text-blue-700">
                    <CustomLineChart 
                        data={dashboardData.salesChartData}
                        yKey="sales"
                    />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;