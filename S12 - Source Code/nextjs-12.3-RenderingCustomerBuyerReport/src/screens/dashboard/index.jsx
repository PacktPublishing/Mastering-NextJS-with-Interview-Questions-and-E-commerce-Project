
const Dashboard = ({dashboardData})=>{

    return(
        <div>
            <div className="grid grid-cols-3 gap-5">
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Buyers</h1>
                    <h1 className="text-3xl">{dashboardData?.totalBuyers}</h1>
                </div>
                <div className="dashboard-card">
                    <h1 className="text-xl font-bold">Total Customers</h1>
                    <h1 className="text-3xl">{dashboardData?.totalCustomers}</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;