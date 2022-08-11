import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = props => {

    const initialCredentials = [{
        user: '',
        password: ''
    }]
    const [credential, setCredential] = useState(initialCredentials)
    return (
        <div>

        </div>
    )
}


export default LoginForm