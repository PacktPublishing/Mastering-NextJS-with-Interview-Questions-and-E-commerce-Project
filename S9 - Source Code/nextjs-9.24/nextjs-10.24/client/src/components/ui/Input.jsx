import { cn } from "@/lib/utils"

export default function Input({type, className, ...props}) {

    return (
        <input
            type={type}
            className={cn("custom-input", className)}
            {...props}
        />
    )
}