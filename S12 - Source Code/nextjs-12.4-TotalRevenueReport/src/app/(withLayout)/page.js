import { getDashboardData } from "@/actions/dashboardActions";
import Dashboard from "@/screens/dashboard";

export default async function Home() {
  const dashboardData = await getDashboardData();

  return (
    <Dashboard dashboardData={dashboardData}/>
  );
}
