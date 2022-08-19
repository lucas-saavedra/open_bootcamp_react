// * Ejercicio sesiones 19, 20 y 21
import axios from 'axios';

// * Default config for axios

export const API_REQUEST = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    responseType: 'json',

})