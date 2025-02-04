import { cn } from "@/lib/utils";

export default function Label({className, required, children}) {

    return (
        <div className={cn("text-sm lg:text-base h-fit", className)}>
            <label>{children}</label>
            {
                required && <span className="text-red-500">*</span>
            }
        </div>
    )
}