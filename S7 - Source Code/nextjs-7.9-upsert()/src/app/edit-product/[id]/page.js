import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { redirect } from 'next/navigation';


export default async function EditProduct({params}) {
    const pId = parseInt(params.id);
    const product = await db.products.findUnique({
        where:{
            id : pId
        }
    });

    async function handleSubmit(formData){
        "use server";
        
        const updatedData = {
            name : formData.get('name'),
            price : parseFloat(formData.get('price')),
            image : formData.get('image').name
        }

        await db.products.upsert({
            where:{
                id:7
            },
            update:{
                name : "UpdatedName"
            },
            create:{
                name : "NewProd",
                price : 123,
                image : "vercel.jpg"
            }
        })

        revalidatePath('/', 'page');
        redirect('/');
    }

    return (
        <div style={{ margin: "4em" }}>
            <form 
                className="max-w-3xl p-12 m-auto border border-gray-300 rounded-lg shadow-lg"
                action={handleSubmit}
            >
                <div className="space-y-8">
                    <div className="border-b border-gray-200 pb-8">
                        <h1 className="text-2xl font-semibold leading-7 text-gray-900">Edit Product</h1>
                    </div>
                    <div className="border-b border-gray-900/10 pb-8">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="block text-md font-medium text-gray-900">
                                    Product Name
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={product.name}
                                        className="block w-full rounded-md border-0 py-1.5 
                                        text-gray-900 shadow-sm
                                        ring-1 ring-inset ring-gray-300
                                        placeholder:text-gray-400
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-md sm:leading-6"
                                        placeholder="E.g., Fruit"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="block text-md font-medium text-gray-900">
                                    Price
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="price"
                                        defaultValue={product.price}
                                        className="block w-full rounded-md border-0 py-1.5 
                                        text-gray-900 shadow-sm
                                        ring-1 ring-inset ring-gray-300
                                        placeholder:text-gray-400
                                        focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-md sm:leading-6"
                                        placeholder="$0"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-full">
                                <label>Product Image</label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-5">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-md text-gray-600">
                                            <label className="block">
                                                <input
                                                    type="file"
                                                    name="image"
                                                    className="block w-full text-md text-slate-700
                                                    file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-md file:font-semibold
                                                    file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                                />
                                            </label>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">.PNG , .JPG , .HEIC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        <Link href="/"> Cancel </Link> 
                    </button>
                    <button 
                        type="submit" 
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold 
                        text-white shadow-sm hover:bg-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

