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
                <div className="w-full h-[300px]">
                    <CustomLineChart/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;