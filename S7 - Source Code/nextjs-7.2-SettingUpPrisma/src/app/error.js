'use client';

export default function Error({error}){
    console.log(error);

    return(
        <div>
            <h1> There is an Error. </h1>
            <p> {error.message} </p>
        </div>
    )
}