import React from 'react'
import { connect } from 'react-redux'
import { httpRequest } from '../../store/actions/asyncActions'
import LoginForm from '../pure/LoginForm'


const urlApi = 'https://reqres.in/api';
const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email,
                password
            }
            dispatch(httpRequest('post', urlApi + '/login', data))
        }
    }
}


export const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
