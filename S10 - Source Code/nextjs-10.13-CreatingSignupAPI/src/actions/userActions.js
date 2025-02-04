"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { jwtTokenVerification } from "./authActions";

export const createUser = async (formData)=>{
    await jwtTokenVerification();

    const data = {
        userName : formData.get("userName"),
        userType : formData.get("userType"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword")
    };

    const existingUser = await db.adminUser.findUnique({
        where : {
            userName : data.userName
        }
    });
    if(existingUser){
        return redirect(`/users/add?errorMessage=Username already exists.`);
    }

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

    await db.adminUser.create({
        data:{
            userName : data.userName,
            userType : data.userType,
            password : hashedPassword
        }
    });

    revalidatePath("/users", "page");
    redirect("/users");
}

export const getUsers = async ()=>{
    await jwtTokenVerification();

    const users = await db.adminUser.findMany();
    return users;
}

export const getUniqueUser = async (userId)=>{
    await jwtTokenVerification();

    const user = await db.adminUser.findUnique({
        where:{
            id:userId
        }
    })

    return user;
}

export const updateUser = async (formData, userId)=>{
    await jwtTokenVerification();

    const data = {
        userName : formData.get("userName"),
        userType : formData.get("userType"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword")
    };

    let hashedPassword;
    if(data.password){
        const salt = bcrypt.genSaltSync(5);
        hashedPassword = await bcrypt.hash(formData.get("password"), salt);
    }
    await db.adminUser.update({
        where:{
            id : parseInt(userId)
        },
        data : {
            userType : data.userType,
            userName : data.userName,
            ...(data.password && {password: hashedPassword})
        }
    })


    revalidatePath("/users", "page");
    redirect("/users");
}

export async function deleteUser(userId){
    await jwtTokenVerification();

    await db.adminUser.delete({
        where:{
            id: userId
        }
    });

    revalidatePath("/users", "page");
}