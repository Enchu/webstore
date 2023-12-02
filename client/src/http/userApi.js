import {$host} from "./index";
import {jwtDecode} from "jwt-decode";

export const authLR =  async (method, url ,data = {}) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL + url}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        localStorage.setItem('token', response.token);
        return await response.json();
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
    }
}

export const logout = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}api/logout`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    localStorage.removeItem('token');

    return await response.json()
}

export const check = async () => {
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}api/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        localStorage.setItem('token', response.token)
        return await response.json()
    }catch (e){
        console.log(e)
    }

}