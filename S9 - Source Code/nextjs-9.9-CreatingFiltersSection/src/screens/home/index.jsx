import FilterSection from "./FilterSection";


const HomeScreen = ()=>{

    return(
        <div className="my-10">
            <h1 className="text-3xl font-semibold">Products</h1>
            
            <div className="my-5 grid grid-cols-4 gap-5">
                <FilterSection/>

                <div className="col-span-3">
                    Product Section
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;