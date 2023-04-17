
import axios from "axios";

export const getCountries = async () => {
    try {
        const resp = axios.get('https://restcountries.com/v3.1/all');
        return resp
    } catch (err) {
        return err
    }
}