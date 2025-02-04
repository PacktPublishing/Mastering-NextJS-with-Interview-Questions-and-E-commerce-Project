import Link from 'next/link';

export default async function Products() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return data;
        });

    return (
        <>
            <h1> This is the Products Page. </h1>
            <Link href="/products/apple"> Apple </Link>
            <Link href="/products/orange"> Orange </Link>
            <div style={{margin:"4em"}}>
                {JSON.stringify(users)}
            </div>
        </>
    )
}