"use client";

import { StarIcon } from "@/components/icons";
import { useProductContext } from "@/components/Layout/ProductContext";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";


const Product = ({ product }) => {
    const { addProductToCart, removeProductFromCart, cartItems } = useProductContext();
    const isProductInCart = cartItems.some((item) => item.id === product.id);
    const [selectedSize, setSelectedSize] = useState("smallSize");

    const handleCartItems = () => {
        if (isProductInCart) {
            removeProductFromCart(product.id);
        } else {
            addProductToCart({
                ...product,
                quantity: 1,
                size: selectedSize
            });
        }
    };

    const sizeOptions = [
        { label: "S", value: "smallSize" },
        { label: "M", value: "mediumSize" },
        { label: "L", value: "largeSize" }
    ];
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    return (
        <div className="my-10 p-5 rounded-xl bg-white grid grid-cols-2 gap-5">
            <div className="w-full h-full bg-gray-100 rounded-xl p-3">
                <Image
                    className="w-full h-full max-h-[calc(100vh-150px)] rounded-xl m-auto"
                    src={`${BASE_URL}${product.image}`}
                    alt="product"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>
            <div className="px-5">
                <div className="flex justify-end">
                    <div className="product-type-label">
                        {product?.productType?.name}
                    </div>
                </div>
                <h1 className="text-2xl font-medium">{product?.name}</h1>
                <div className="flex gap-x-1">
                    {
                        [...Array(product?.rating || 0)].map((star) => (
                            <StarIcon key={star} />
                        ))
                    }
                </div>

                <div className="my-7">
                    <h6 className="text-sm font-medium text-green-600">
                        Special Price
                    </h6>
                    <div className="text-xl font-medium flex gap-x-3 items-center">
                        <span className="text-2xl">${product.sellPrice}</span>
                        <span className="text-gray-500 line-through">${product.mrp}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{product.currentStock} item left</span>
                </div>

                <div className="my-7 space-y-1">
                    <h6 className="text-lg font-semibold">Size</h6>
                    <div className="flex flex-wrap gap-3">
                        {
                            sizeOptions.filter((size)=>product[size.value]!==0).map((item, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`sizes-${item.value}`}
                                        name="sizes"
                                        className="hidden peer"
                                        value={item.value}
                                        checked={selectedSize === item.value}
                                        onChange={()=>setSelectedSize(item.value)}
                                    />
                                    <label htmlFor={`sizes-${item.value}`} className="checkbox-button-label">
                                        {item.label}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <p className="text-lg font-semibold">Description</p>
                <p className="text-gray-600">{product?.description}</p>

                <div className="my-7 flex gap-x-5">
                    <Button
                        className={cn(
                            "w-full custom-outline-btn",
                            isProductInCart && "border-red-400 text-red-500"
                        )}
                        onClick={handleCartItems}
                    >
                        {isProductInCart ? "Remove from Cart" : "Add to Cart"}
                    </Button>
                    <Button className="w-full">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Product;