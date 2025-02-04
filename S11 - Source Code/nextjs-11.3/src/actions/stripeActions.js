"use server";

import Stripe from "stripe";

export async function createCheckoutSession(){
    const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
    const checkoutSession = await stripeInstance.checkout.sessions.create({
        ui_mode: "embedded",
        invoice_creation: {
            enabled: true,
        },
        customer_email: "test@gmail.com",
        submit_type: "pay",
        billing_address_collection: "auto",
        shipping_address_collection: {
            allowed_countries : ["US", "CA"],
        },
        line_items: [
            {
                price_data:{
                    currency: "usd",
                    product_data: {
                        name: "T-Shirt"
                    },
                    unit_amount: 1000,
                },
                quantity: 2,
            }
        ],
        mode: "payment",
        return_url: `http://localhost:3000/payment-status?session_id={CHECKOUT_SESSION_ID}`,
    });

    return {
        clientSecret : checkoutSession.client_secret
    }
}