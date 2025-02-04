import CustomLineChart from "@/components/CustomLineChart";

const ChartSection = ({dashboardData}) => {

    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                <div className="w-full dashboard-card">
                    <h1 className="text-2xl font-bold">Sales</h1>
                    <div className="w-full h-[300px] text-blue-700">
                        <CustomLineChart
                            data={dashboardData.salesChartData}
                            yKey="sales"
                        />
                    </div>
                </div>
                <div className="w-full dashboard-card">
                    <h1 className="text-2xl font-bold">Customers</h1>
                    <div className="w-full h-[300px] text-green-400">
                        <CustomLineChart
                            data={dashboardData.customerChartData}
                            yKey="count"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartSection;