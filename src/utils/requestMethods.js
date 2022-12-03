import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/";
const root = JSON.parse(localStorage.getItem("persist:root"));
const token = root?.accessToken;

export const publicRequest = axios.create({
    baseURL: baseURL,
});

export const protectedRequest = axios.create({
    baseURL: baseURL,
    headers: {token: `Bearer ${token}`},
});