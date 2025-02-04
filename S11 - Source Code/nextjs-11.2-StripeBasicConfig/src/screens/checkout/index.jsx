import { loadStripe } from "@stripe/stripe-js";

const Checkout = ()=>{
    const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    return(
        <div>
            Checkout Page.
        </div>
    );
}

export default Checkout;