"use client";

import Accordion from "@/components/ui/Accordion";
import PriceRangeSlider from "@/components/ui/PriceRangeSlider";
import { objectToQueryString } from "@/lib/utils";
import { useRouter } from "next/navigation";


const FilterSection = ({ searchParams, productTypes }) => {
    const SortByItems = [
        {label:"All", value:"all"},
        {label:"Price high to low", value:"highToLow"},
        {label:"Price low to high", value:"lowToHigh"}
    ];
    const RatingItems = [
        {label:"All", value:"all"},
        {label:"1", value:"1"},
        {label:"2", value:"2"},
        {label:"3", value:"3"},
        {label:"4", value:"4"},
        {label:"5", value:"5"},
    ];
    const AvailabilityItems = [
        {label:"All", value:"all"},
        {label:"In Stock", value:"true"},
        {label:"Out of Stock", value:"false"}
    ]

    const productTypeId = searchParams.productTypeId || "all";
    const sortBy = searchParams.sortBy || "all";
    const rating = searchParams.rating || "all";
    const inStock = searchParams.inStock || "all";

    const router = useRouter();
    const openAccordion = searchParams.openAccordion?.split(",") || [];

    const updateSearchParams = (newParamsArray) => {
        const updatedSearchParams = { ...searchParams };

        newParamsArray?.forEach((param) => {
            Object.entries(param).forEach(([key, value]) => {
                if (value === null || value === "" || value==="all") {
                    delete updatedSearchParams[key];
                } else {
                    updatedSearchParams[key] = value;
                }
            })
        })

        router.push(`/?${objectToQueryString(updatedSearchParams)}`);
    };

    const handleAccordion = (value) => {
        const newOpenAccordion = openAccordion.includes(value) ? openAccordion.filter((item) => item !== value)
            : [...openAccordion, value];

        updateSearchParams([{ openAccordion: newOpenAccordion.join(",") }]);
    }

    const minPrice = searchParams.minPrice || "0";
    const maxPrice = searchParams.maxPrice || "100";

    const handlePriceRangeChange = (value)=>{
        updateSearchParams([{minPrice:value[0]}, {maxPrice:value[1]}]);
    }

    const handleFilterChange = (filterType, value)=>{
        updateSearchParams([{
            [filterType]: value
        }]);
    }

    return (
        <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
            <h1 className="text-2xl mb-8 font-semibold">Filters</h1>

            <Accordion
                title="Category"
                isOpened={openAccordion.includes("productTypeId")}
                type="productTypeId"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        productTypes.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`productType-${item.value}`}
                                    className="hidden peer"
                                    name="productTypeId"
                                    value={item.value}
                                    checked={productTypeId == item.value}
                                    onChange={()=>handleFilterChange("productTypeId", item.value)}
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
            </Accordion>
            <Accordion
                title="Sort By"
                isOpened={openAccordion.includes("sortBy")}
                type="sortBy"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        SortByItems.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`sortBy-${item.value}`}
                                    className="hidden peer"
                                    name="sortBy"
                                    value={item.value}
                                    checked={sortBy == item.value}
                                    onChange={()=>handleFilterChange("sortBy", item.value)}
                                />
                                <label
                                    htmlFor={`sortBy-${item.value}`}
                                    className="checkbox-button-label"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Price Range"
                isOpened={openAccordion.includes("priceRange")}
                type="priceRange"
                handleAccordion={handleAccordion}
            >
                <div className="p-3">
                    <PriceRangeSlider 
                    range
                        minValue={0} 
                        maxValue={100}
                        value = {[minPrice, maxPrice]}
                        handleChange = {handlePriceRangeChange}
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                </div>
            </Accordion>
            <Accordion
                title="Rating"
                isOpened={openAccordion.includes("rating")}
                type="rating"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        RatingItems.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`rating-${item.value}`}
                                    className="hidden peer"
                                    name="rating"
                                    value={item.value}
                                    checked={rating == item.value}
                                    onChange={()=>handleFilterChange("rating", item.value)}
                                />
                                <label
                                    htmlFor={`rating-${item.value}`}
                                    className="checkbox-button-label"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Availability"
                isOpened={openAccordion.includes("inStock")}
                type="inStock"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        AvailabilityItems.map((item, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={`availability-${item.value}`}
                                    className="hidden peer"
                                    name="inStock"
                                    value={item.value}
                                    checked={inStock == item.value}
                                    onChange={()=>handleFilterChange("inStock", item.value)}
                                />
                                <label
                                    htmlFor={`availability-${item.value}`}
                                    className="checkbox-button-label"
                                >
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
        </div>
    )
}

export default FilterSection;