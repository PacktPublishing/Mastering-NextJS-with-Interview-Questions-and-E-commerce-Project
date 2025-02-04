import { getBuyers } from "@/actions/buyerActions";
import Buyers from "@/screens/buyers";

const BuyersPage = async ()=>{
    const buyers = await getBuyers();

    return(
        <>
            <Buyers buyers={buyers}/>
        </>
    );
}

export default BuyersPage;