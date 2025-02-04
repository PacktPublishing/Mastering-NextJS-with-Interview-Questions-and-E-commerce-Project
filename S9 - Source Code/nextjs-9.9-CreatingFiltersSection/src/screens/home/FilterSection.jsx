

const FilterSection = ()=>{
    const CategoryItems = [
        {label:"All", value:"all"},
        {label:"Kid's Clothing", value:"Kid's Clothing"},
        {label:"Men's Clothing", value:"Men's Clothing"},
    ]

    return(
        <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
            <h1 className="text-2xl mb-8 font-semibold">Filters</h1>

            <div className="space-y-2 border-b border-b-gray-300 pb-3">
                <span>Category</span>
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        CategoryItems.map((item, index)=>(
                            <div key={index}>
                                <input 
                                    type="checkbox" 
                                    id={`productType-${item.value}`}
                                    className="hidden peer"
                                />
                                <label 
                                    htmlFor={`productType-${item.value}`} 
                                    className="checkbox-button-label"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FilterSection;