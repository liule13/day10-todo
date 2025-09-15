import axios from "axios";

export const api = axios.create({
    baseURL: "https://68c7ac9c5d8d9f51473288cc.mockapi.io/",
    headers: {"Content-Type": "application/json"},
    timeout: 10_000,
})