import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export const createUser = async (formData)=>{
    "use server";

    const data = {
        userName : formData.get("userName"),
        userType : formData.get("userType"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword")
    };

    await db.adminUser.create({
        data:{
            userName : data.userName,
            userType : data.userType,
            password : data.password
        }
    });

    revalidatePath("/users", "page");
    redirect("/users");
}