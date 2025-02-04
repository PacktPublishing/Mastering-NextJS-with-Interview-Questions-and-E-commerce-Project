"use server";

import { setCookie } from "@/lib/cookies";
import { db } from "@/lib/db";
import { createJWT } from "@/lib/utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function loginUser(formData){
    const data = {
        userName: formData.get("userName"),
        password: formData.get("password"),
    };
    const user = await db.adminUser.findUnique({
        where:{
            userName: data.userName
        }
    })
    console.log(user);
    const isValidPassword = await bcrypt.compare(data.password, user?.password);

    if(!user || !isValidPassword){
        return redirect(`/login?errorMessage=Invalid credentials. Please try again.`);
    }

    const token = await createJWT(user);
    setCookie("jwt_token", token, {maxAge: 2*60*60});
    redirect("/");
}