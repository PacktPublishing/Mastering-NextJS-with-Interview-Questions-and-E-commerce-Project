"use client";

import { StarIcon } from "@/components/icons";
import { useProductContext } from "@/components/Layout/ProductContext";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


const ProductCard = ({product})=>{
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const {addProductToCart, removeProductFromCart, cartItems} = useProductContext();
    const isProductInCart = cartItems.some((item)=>item.id===product.id);

    const handleCartItems = ()=>{
        if(isProductInCart){
            removeProductFromCart(product.id);
        }else{
            addProductToCart({
                ...product,
                quantity: 1,
                size: "smallSize"
            });
        }
    };

    return(
        <div 
            className="bg-white rounded-xl shadow-lg w-full h-full min-h-[624px]"
            key={product?.id}    
        >
            <Image
                className="w-full h-full rounded-t-xl max-h-96 object-cover"
                src={`${BASE_URL}${product?.image}`}
                alt="product"
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className="p-5 space-y-4">
                <div className="space-y-1">
                    <Link 
                        className="text-2xl font-semibold leading-5"
                        href={`/product/${product?.id}`}
                    >
                        {product?.name}
                    </Link>
                    <p className="text-gray-400 text-md truncate">{product?.description}</p>
                </div>

                <div className="space-y-0">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center text-xl font-semibold">
                            <span className="text-gray-500 line-through">${product?.mrp}</span>
                            <span className="text-2xl">${product?.sellPrice}</span>
                        </div>
                        <span className="text-gray-400 text-md">{product?.currentStock} left</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-1">
                            {
                                [...Array(product?.rating || 0)].map((star)=>(
                                    <StarIcon key={star}/>
                                ))
                            }
                        </div>
                        <div className="product-type-label">
                            {product?.productType?.name}
                        </div>
                    </div>
                </div>

                <div className="flex gap-x-2">
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

export default ProductCard;