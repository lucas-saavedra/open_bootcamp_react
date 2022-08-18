

import { Link } from "react-router-dom"
import LoginFormik from "../../components/pure/forms/LoginFormik"

const LoginPage = () => {

    return (
        <>
            <LoginFormik />
            <p>Does not have an account?</p>
            <Link to='/register'>Register here</Link>
        </>
    )
}

export default LoginPage