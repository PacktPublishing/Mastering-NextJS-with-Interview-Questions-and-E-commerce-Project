import EditUser from "@/screens/users/edit";

const EditUserPage = async ({params})=>{

    return(
        <>
            <EditUser params={params}/>
        </>
    )
}

export default EditUserPage;