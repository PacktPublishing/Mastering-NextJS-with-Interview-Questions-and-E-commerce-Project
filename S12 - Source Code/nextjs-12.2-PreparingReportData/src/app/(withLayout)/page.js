import { getDashboardData } from "@/actions/dashboardActions";

export default async function Home() {
  const dashboardData = await getDashboardData();
  console.log(dashboardData);

  return (
    <h1>This is the Admin Section.</h1>
  );
}
