import axios from "axios";

export const baseURL = "http://localhost:8080/api/v1/";

export const publicRequest = axios.create({
    baseURL: baseURL,
});

export const protectedRequest = () => {
    const data = localStorage.getItem("persist:root");
    const token = JSON.parse(data)?.accessToken
    return axios.create({
        baseURL: baseURL,
        headers: {token: `Bearer ${token}`},
    });
}