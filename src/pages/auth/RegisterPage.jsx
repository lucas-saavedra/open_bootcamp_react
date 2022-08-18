import React from 'react'
import { Link } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/RegisterFormik'

const RegisterPage = () => {
    return (
        <div>
            <RegisterFormik />
            <p>Already registered?</p>
            <Link to='/login'>Login here</Link>
        </div>
    )
}

export default RegisterPage