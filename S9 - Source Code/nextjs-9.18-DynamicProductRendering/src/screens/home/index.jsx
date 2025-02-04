import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";


const HomeScreen = ({searchParams, products})=>{

    return(
        <div className="my-10">
            <h1 className="text-3xl font-semibold">Products</h1>
            
            <div className="my-5 grid grid-cols-4 gap-5">
                <FilterSection searchParams={searchParams}/>

                <div className="col-span-3 grid grid-cols-2 gap-5">
                    {
                        products.data?.map((product)=>(
                            <ProductCard product={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;