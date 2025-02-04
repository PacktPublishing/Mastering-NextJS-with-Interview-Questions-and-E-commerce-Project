import UsersScreen from "@/screens/users";
import { getUsers } from "@/actions/userActions";

export default async function UsersPage(){

    const users = await getUsers();

    return(
        <>
            <UsersScreen users={users}/>
        </>
    )
}