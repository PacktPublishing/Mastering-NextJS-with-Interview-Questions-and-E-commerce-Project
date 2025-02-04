import { DeleteIcon, MinusCircleIcon, PlusCircleIcon, StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Image from "next/image";


const Cart = () => {
    const sizeOptions = [
        {label:"S", value:"smallSize"},
        {label:"M", value:"mediumSize"},
        {label:"L", value:"largeSize"}
    ];

    return (
        <div className="my-10">
            <h1 className="text-3xl font-semibold">
                Cart
            </h1>

            <div className="grid grid-cols-4 gap-5 my-5">
                <div className="col-span-3 space-y-5">

                    <div className="w-full bg-white shadow-md rounded-xl">
                        <div className="grid grid-cols-[auto_1fr]">
                            <Image
                                className="w-60 h-60 object-cover rounded-l-xl m-auto"
                                src="/prod-img.jpg"
                                alt="product"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                            <div className="flex flex-col p-8 justify-between">
                                <div>
                                    <div className="flex justify-between">
                                        <h1 className="text-2xl font-medium">Product Name</h1>
                                        <div className="product-type-label">
                                            Product Type
                                        </div>
                                    </div> 
                                    <div className="flex gap-x-1">
                                        {
                                            [...Array(5)].map((star) => (
                                                <StarIcon key={star} />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="text-xl flex gap-x-3 items-center">
                                    <span className="text-gray-500 line-through font-medium">
                                        $14.99
                                    </span>
                                    <span className="text-2xl font-semibold">
                                        $12.99
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-x-4 items-center">
                                        <Button className="p-0 bg-transparent text-black">
                                            <MinusCircleIcon className="w-8 h-8" />
                                        </Button>
                                        <span className="text-xl font-semibold">1</span>
                                        <Button className="p-0 bg-transparent text-black">
                                            <PlusCircleIcon className="w-8 h-8" />
                                        </Button>
                                    </div>
                                    <div className="flex items-center gap-x-4">
                                        <h6 className="text-lg font-semibold">Size</h6>
                                        <div className="flex flex-wrap gap-3">
                                            {
                                                sizeOptions.map((item, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type="radio"
                                                            id={`sizes-${item.value}`}
                                                            name="sizes"
                                                            className="hidden peer"
                                                        />
                                                        <label htmlFor={`sizes-${item.value}`} className="checkbox-button-label">
                                                            {item.label}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <Button className="!bg-red-500 w-fit flex gap-2 items-center">
                                        <DeleteIcon/>
                                        <span>Remove</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sticky top-5 h-fit">
                    <div className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between gap-y-5">
                        <h1 className="text-2xl font-semibold border-b">Cart Summary</h1>

                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2 text-xl">
                                <span className="truncate">Product Name</span>
                                <span className="text-end">$12.99</span>
                            </div>
                        </div>
                        <div className="border-t">
                            <div className="grid grid-cols-2 gap-2 text-xl font-semibold mt-2">
                                <span>Total Amount</span>
                                <span className="text-end">$12.99</span>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full mt-2">
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart;