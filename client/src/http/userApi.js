import {$host} from "./index";
import {jwtDecode} from "jwt-decode";

export const registration = async (email, password) => {
    try{
        const {data} = await $host.post('api/registration', {email, password})
        return jwtDecode(data)
    }catch (e){
        console.log('Error during registration:', e)
        throw e
    }
}

export const login = async (email, password) => {
    try{
        const {data} = await $host.post('api/login', {email, password})
        return data
    }catch (e) {
        console.log('Error during login:', e)
        throw e
    }
}

export const check = async (email, password) => {
    const {data} = await $host.post('api/registration')
    return jwtDecode(data)
}