import { cn } from "@/lib/utils";


export function Input({ type, className, ...props }) {

    return (
        <input
            type={type}
            className={cn("custom-input", className)}
            {...props}
        />
    )
}