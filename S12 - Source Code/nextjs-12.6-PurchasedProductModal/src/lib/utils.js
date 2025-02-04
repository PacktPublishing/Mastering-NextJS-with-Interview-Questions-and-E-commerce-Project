import clsx from "clsx";
import { jwtVerify, SignJWT } from "jose";
import { twMerge } from "tailwind-merge";


export function cn(...classNames){
    return twMerge(clsx(classNames));
}

export async function createJWT(user){
    const token = await new SignJWT({
        ...user,
    }).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt()
    .setExpirationTime("2h")
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    return token;
};

export async function verifyJWT(token){
    try {
        const {payload} = await jwtVerify(
            token, 
            new TextEncoder().encode(process.env.JWT_SECRET)
        );
        return payload;
    } catch (error) {
        return false;
    }
}

export function formatDate(dateString){
    const date = new Date(dateString);
    const options = {
        timeZone: "UTC"
    };

    return date.toLocaleDateString("en-IN", options);
}