"use server";

import { getCookie } from "@/lib/cookies";
import Stripe from "stripe";

const SIZES = {
    smallSize: "S",
    mediumSize: "M",
    largeSize: "L"
};
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function createCheckoutSession(products, customerData){
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const checkoutSession = await stripeInstance.checkout.sessions.create({
        ui_mode: "embedded",
        invoice_creation: {
            enabled: true,
        },
        customer_email: customerData?.email,
        submit_type: "pay",
        billing_address_collection: "auto",
        shipping_address_collection: {
            allowed_countries : ["US", "CA"],
        },
        line_items: products?.map((product)=>({
            price_data:{
                currency: "usd",
                product_data: {
                    name: `${product.name} (Size:${SIZES[product.size]})`
                },
                unit_amount: parseInt(product.sellPrice*100),
            },
            quantity: product.quantity,
        })),
        mode: "payment",
        metadata: {
            products: JSON.stringify(
                products.map((product)=>({
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity,
                    sellPrice: product.sellPrice,
                    size: product.size,
                }))
            ),
            customerId: customerData?.id,
        },
        return_url: `http://localhost:3000/payment-status?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
        clientSecret : checkoutSession.client_secret
    }
}

export async function getCheckoutSession(session_id){
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripeInstance.checkout.sessions.retrieve(session_id);
    
    return session;
}

export async function updateCheckoutData(data){
    const response = await fetch(`${BASE_URL}/api/checkout`,{
        method: "POST",
        credentials: "include",
        headers: {
            Cookie: "customer_jwt_token="+getCookie("customer_jwt_token")
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}