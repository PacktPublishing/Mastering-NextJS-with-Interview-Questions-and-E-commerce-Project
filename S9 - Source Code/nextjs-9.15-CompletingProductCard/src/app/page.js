import HomeScreen from "@/screens/home";
import Image from "next/image";

export default function Home({searchParams}) {
  return (
    <HomeScreen searchParams={searchParams}/>
  );
}
