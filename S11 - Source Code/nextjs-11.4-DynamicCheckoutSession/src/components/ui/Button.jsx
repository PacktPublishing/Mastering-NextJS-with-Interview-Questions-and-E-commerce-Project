import { cn } from "@/lib/utils"

export default function Button({type="button", onClick, className, children, ...props}) {

    return (
        <button 
            type={type}
            className={cn("custom-btn", className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}