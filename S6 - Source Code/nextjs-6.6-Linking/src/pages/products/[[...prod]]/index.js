import { useRouter } from "next/router"

export default function Apple(){
    const router = useRouter();

    console.log(router.query);
    console.log(router.pathname);

    return(
        <div>
            <h1> This is the /products/{router.query.prod} route. </h1>
        </div>
    )
}