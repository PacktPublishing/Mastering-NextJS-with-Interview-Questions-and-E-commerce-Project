'use client';

import { deleteProduct } from "@/actions/productAction";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {

    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-md">
            <Image
                width={400}
                height={450}
                alt={product.image}
                src={'/' + product.image}
                className='rounded-t-lg'
            />
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-stone-800">
                    {product.name}
                </h5>
                <p className="mb-3 font-semibold text-xl text-stone-600">
                    ${product.price}
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
                <Link 
                    href={'/edit-product/'+product.id}
                    className="col-span-1 p-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center shadow border-2 border-stone-200 hover:border-indigo-400 rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </Link>
                <button
                    onClick={()=>deleteProduct(product.id)}
                    className="col-span-1 p-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center shadow border-2 border-stone-200 hover:border-red-300 rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
        </div>
    )
}