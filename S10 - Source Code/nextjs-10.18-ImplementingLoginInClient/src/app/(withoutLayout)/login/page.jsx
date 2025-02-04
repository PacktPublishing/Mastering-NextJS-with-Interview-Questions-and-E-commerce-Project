const { default: Login } = require("@/screens/login")

const LoginPage = ({searchParams})=>{

    return(
        <>
            <Login searchParams={searchParams}/>
        </>
    )
}

export default LoginPage;