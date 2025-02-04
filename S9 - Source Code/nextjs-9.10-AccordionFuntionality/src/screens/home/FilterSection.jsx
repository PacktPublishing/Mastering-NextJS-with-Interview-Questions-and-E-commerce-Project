"use client";

import { ChevronDownIcon } from "@/components/icons";
import { cn, objectToQueryString } from "@/lib/utils";
import { useRouter } from "next/navigation";


const FilterSection = ({searchParams})=>{
    const CategoryItems = [
        {label:"All", value:"all"},
        {label:"Kid's Clothing", value:"Kid's Clothing"},
        {label:"Men's Clothing", value:"Men's Clothing"},
    ];

    const router = useRouter();
    const openAccordion = searchParams.openAccordion?.split(",") || [];

    const updateSearchParams = (newParamsArray)=>{
        const updatedSearchParams = {...searchParams};

        newParamsArray?.forEach((param)=>{
            Object.entries(param).forEach(([key,value])=>{
                if(value===null || value===""){
                    delete updatedSearchParams[key];
                }else{
                    updatedSearchParams[key] = value;
                }
            })
        })

        router.push(`/?${objectToQueryString(updatedSearchParams)}`);
    };

    const handleAccordion = (value)=>{
        const newOpenAccordion = openAccordion.includes(value) ? openAccordion.filter((item)=>item!==value)
            : [...openAccordion, value];

        updateSearchParams([{openAccordion: newOpenAccordion.join(",")}]);
    }

    return(
        <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
            <h1 className="text-2xl mb-8 font-semibold">Filters</h1>

            <div className="space-y-2 border-b border-b-gray-300 pb-3">
                <div className="accordion-button" onClick={()=>handleAccordion("category")}>
                    <span>Category</span>
                    <ChevronDownIcon/>
                </div>
                <div 
                    className={cn(
                        "max-h-0 overflow-hidden",
                        openAccordion.includes("category") && "max-h-96"
                    )}
                >
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
        </div>
    )
}

export default FilterSection;