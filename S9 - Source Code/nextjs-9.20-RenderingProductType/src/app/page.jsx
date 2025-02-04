import { getProducts, getProductTypes } from "@/actions/productActions";
import HomeScreen from "@/screens/home";

export default async function Home({searchParams}) {
  const products = await getProducts();
  const productTypesRes = await getProductTypes();
  const productTypes = [
    {label:"All", value:"all"},
    ...productTypesRes?.data?.map((item)=>({
      label: item.name,
      value: item.id
    }))
  ]

  return (
    <HomeScreen 
      searchParams={searchParams} 
      products={products}
      productTypes={productTypes}
    />
  );
}
