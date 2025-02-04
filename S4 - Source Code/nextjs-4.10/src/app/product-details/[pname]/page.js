export default function Product({params}){

    return(
        <div>
            <h1> This is a Product page. </h1>
            <h2> {params.pname} </h2>
        </div>
    )
}