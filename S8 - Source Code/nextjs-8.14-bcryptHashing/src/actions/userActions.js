import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const createUser = async (formData)=>{
    "use server";

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = await bcrypt.hash(formData.get("password"), salt);

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
            password : hashedPassword
        }
    });

    revalidatePath("/users", "page");
    redirect("/users");
}