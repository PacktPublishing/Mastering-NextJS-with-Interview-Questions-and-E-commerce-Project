"use client";

import { createCheckoutSession } from "@/actions/stripeActions";
import { useProductContext } from "@/components/Layout/ProductContext";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Checkout = ()=>{
    const router = useRouter();
    const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    const [options, setOptions] = useState();
    const {cartItems, customerData} = useProductContext();

    const fetchClientSecret = async ()=>{
        const session = await createCheckoutSession(cartItems, customerData);
        setOptions({clientSecret: session.clientSecret});
    }
    useEffect(()=>{
        if(cartItems.length===0 || !customerData?.id){
            router.push("/");
        }else{
            fetchClientSecret();
        }
    });

    return(
        <div>
            {
                options?.clientSecret && (
                    <EmbeddedCheckoutProvider stripe={StripePromise} options={options}>
                        <div className="my-10">
                            <EmbeddedCheckout/>
                        </div>
                    </EmbeddedCheckoutProvider>
                )
            }
        </div>
    );
}

export default Checkout;