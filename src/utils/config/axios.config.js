
import axios from 'axios';

// * Default config for axios

export const API_REQUEST = axios.create({
    baseURL: 'https://reqres.in/api',
    responseType: 'json',

})