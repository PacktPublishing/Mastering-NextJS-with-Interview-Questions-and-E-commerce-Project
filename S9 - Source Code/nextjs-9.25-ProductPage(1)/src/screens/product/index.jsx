import { StarIcon } from "@/components/icons";
import Image from "next/image";


const Product = ()=>{

    return(
        <div className="my-10 p-5 rounded-xl bg-white grid grid-cols-2 gap-5">
            <div className="w-full h-full bg-gray-100 rounded-xl p-3">
                <Image
                    className="w-full h-full max-h-[calc(100vh-150px)] rounded-xl m-auto"
                    src="/vercel.svg"
                    alt="product"
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>
            <div className="px-5">
                <div className="flex justify-end">
                    <div className="product-type-label">
                        Product Type
                    </div>
                </div>
                <h1 className="text-2xl font-medium">Product Name</h1>
                <div className="flex gap-x-1">
                    {
                        [...Array(5)].map((star)=>(
                            <StarIcon key={star}/>
                        ))
                    }
                </div>

                <div className="my-7">
                    <h6 className="text-sm font-medium text-green-600">
                        Special Price
                    </h6>
                    <div className="text-xl font-medium flex gap-x-3 items-center">
                        <span className="text-2xl">$16.99</span>
                        <span className="text-gray-500 line-through">$19.99</span>
                    </div>
                    <span className="text-gray-500 font-medium">123 item left</span>
                </div>
            </div>
        </div>
    )
}

export default Product;