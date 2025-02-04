import { getProducts } from "@/actions/productActions";
import HomeScreen from "@/screens/home";
import Image from "next/image";

export default async function Home({searchParams}) {
  const products = await getProducts();

  return (
    <HomeScreen searchParams={searchParams} products={products}/>
  );
}
