import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createJWT } from "@/lib/utils";

export async function POST(request){
    try {
        const data = await request.json();

        const existingCustomer = await db.buyerMaster.findUnique({
            where:{
                email: data.email,
            }
        });
        if(!existingCustomer){
            return NextResponse.json(
                {
                    message: "User not found.",
                },
                { status: 404 }
            );
        };

        const isValidPassword = await bcrypt.compare(data.password, existingCustomer.password);
        if(!isValidPassword){
            return NextResponse.json(
                {
                    message: "Invalid credentials. Please try again."
                },
                { status: 401 }
            );
        };

        const token = await createJWT(existingCustomer);

        return NextResponse.json(
            {
                message: "Login Successfull",
                data : existingCustomer,
                token
            }
        );
        
    } catch (error) {
        return NextResponse.json(
            {
                message: "Something Went Wrong.",
                error: error.message,
            },
            { status: 500 }
        )
    }
}