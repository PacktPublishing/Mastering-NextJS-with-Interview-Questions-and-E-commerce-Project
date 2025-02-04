"use server"

import { setCookie } from "@/lib/cookies";
import { redirect } from "next/navigation";

export async function registerUser(formData){
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        const errRes = await response.json();
        return redirect(`/sign-up?errorMessage=${errRes.message || "Something went wrong. Please try again."}`);
    }

    const resData = await response.json();
    setCookie("customer_jwt_token", resData.token, {maxAge: 2*60*60});

    redirect("/")
}
