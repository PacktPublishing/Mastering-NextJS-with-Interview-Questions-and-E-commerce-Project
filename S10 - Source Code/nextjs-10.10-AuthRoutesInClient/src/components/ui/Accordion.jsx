import { ChevronDownIcon } from "../icons";
import { cn } from "@/lib/utils";

const Accordion = ({title, type, children, isOpened, handleAccordion}) => {

    return (
        <>
            <div className="space-y-2 border-b border-b-gray-300 pb-3">
                <div className="accordion-button" onClick={() => handleAccordion(type)}>
                    <span>{title}</span>
                    <ChevronDownIcon
                        className={cn("transition-all duration-300 ease-in-out", isOpened && "rotate-180")}
                    />
                </div>
                <div
                    className={cn(
                        "max-h-0 overflow-hidden transition-max-height duration-300 ease-in-out",
                        isOpened && "max-h-96"
                    )}
                >
                    {children}
                </div>
            </div>
        </>
    )
}

export default Accordion;