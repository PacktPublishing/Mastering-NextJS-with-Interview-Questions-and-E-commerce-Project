"use server";

import { getCookie, setCookie } from "@/lib/cookies";
import { db } from "@/lib/db";
import { createJWT, verifyJWT } from "@/lib/utils";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
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

export async function jwtTokenVerification(){
    const token = getCookie("jwt_token");
    const tokenData = await verifyJWT(token);

    if(!tokenData){
        deleteCookie("jwt_token");
        return redirect("/login");
    }

    return tokenData;
}

export async function getUserData(){
    const decodedToken = await jwtTokenVerification();
    const userData = await db.adminUser.findUnique({
        where : {
            id: decodedToken.id
        }
    })

    return userData;
}

export async function deleteCookie(name){
    cookies().delete(name);
}

export async function logoutUser(){
    deleteCookie("jwt_token");
    redirect("/login");
}