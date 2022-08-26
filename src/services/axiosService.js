
import { API_REQUEST } from "../utils/config/axios.config";
/**
 * *Login Method to ReqREs Endpoint
 * @param {string} email
 * @param {string} password
 */
export const axiosLogin = async (email, password) => {
    const body = {
        email,
        password
    }
    const result = await API_REQUEST.post('/login', body);
    return result.data
}

//TODO:  Get all users 
export const getAllUsers = async () => {
    return await API_REQUEST.get('/users');
}
//TODO:  Get all users 
export const getAllPagedUsers = async (page) => {
    return await API_REQUEST.get(`/user?page=/${page}`)
}
//TODO:  Get User by ID
export const getUserById = async (id) => {
    return await API_REQUEST.get(`/users/${id}`);
}
//TODO:  Create User
//TODO:  Update User
//TODO:  Delete User
