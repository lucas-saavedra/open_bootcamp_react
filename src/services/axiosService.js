// * Ejercicio sesiones 19, 20 y 21
import { API_REQUEST } from "../utils/config/axios.config";

export const getRandomJoke = async () => {
    const result = await API_REQUEST.get('/random');
    return result;
}