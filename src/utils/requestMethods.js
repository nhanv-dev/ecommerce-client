import axios from "axios";

export const baseURL = "http://localhost:8080/api/v1/";

let getToken = () => {
    console.log(JSON.parse(localStorage.getItem("persist:root"))?.accessToken)
    const data = localStorage.getItem("persist:root");
    return JSON.parse(data)?.accessToken
};

export const publicRequest = axios.create({
    baseURL: baseURL,
});

export const protectedRequest = axios.create({
    baseURL: baseURL,
    headers: {token: `Bearer ${getToken()}`},
});