import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Switch from "@/components/ui/Switch";

const AddProducts = ({searchParams}) => {
    const {errorMessage} = searchParams;

    return (
        <div>
            <h1 className="text-3xl font-semibold p-2"> Add Product </h1>

            <form
                className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2"
            >
                {
                    errorMessage && (
                        <div
                            className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit"
                        >
                            <span
                                className="text-red-500 col-span-2 text-mg my-0 font-500"
                            >{errorMessage}</span>
                        </div>
                    )
                }
                <div className="grid gap-2">
                    <Label required={true}>Product Name</Label>
                    <Input placeholder="Enter Product Name" name="name"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Product Type</Label>
                    <select className="custom-input appearance-none cursor-pointer" name="productType">
                        <option value="">Select Product Type</option>
                        <option value="Kid's Clothing">Kid's Clothing</option>
                        <option value="Men's Clothing">Men's Clothing</option>
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>MRP</Label>
                    <Input placeholder="Enter MRP" name="mrp"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Selling Price</Label>
                    <Input 
                        type="number" 
                        placeholder="Enter Selling Price" 
                        name="sellPrice"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Image</Label>
                    <Input
                        type="file" 
                        name="image"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Small Size</Label>
                    <Input
                        type="number" 
                        placeholder="Enter Stock of Small Size" 
                        name="name"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Medium Size</Label>
                    <Input
                        type="number" 
                        placeholder="Enter Stock of Medium Size" 
                        name="mediumSize"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Large Size</Label>
                    <Input
                        type="number" 
                        placeholder="Enter Stock of Large Size" 
                        name="largeSize"
                    />
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Product Status</Label>
                    <Switch name="isActive"/>
                </div>
                <div className="grid col-span-2 gap-2">
                    <Label required={true}>Description</Label>
                    <textarea
                        className="custom-input h-auto"
                        name="description"
                        rows={5}
                        placeholder="Enter Product Description"
                    />
                </div>

                <Button className="w-52 col-span-2 mt-2">Submit</Button>
            </form>
        </div>
    )
}

export default AddProducts;