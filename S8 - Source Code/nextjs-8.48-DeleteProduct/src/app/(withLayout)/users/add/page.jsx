import AddUser from "@/screens/users/add";

export default function({searchParams}){

    return(
        <>
            <AddUser searchParams={searchParams}/>
        </>
    )
}