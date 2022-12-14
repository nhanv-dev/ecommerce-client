import axios from "axios";

export const baseURL = "http://localhost:8080/api/v1/";
export const root = JSON.parse(localStorage.getItem("persist:root"));
export const token = root?.accessToken;

export const publicRequest = axios.create({
    baseURL: baseURL,
});

export const protectedRequest = axios.create({
    baseURL: baseURL,
    headers: {token: `Bearer ${token}`},
});