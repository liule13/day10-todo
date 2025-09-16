import { message } from "antd";
import axios from "axios";
const api = axios.create({
    // baseURL: "https://68c7ac9c5d8d9f51473288cc.mockapi.io/",
    baseURL: "http://localhost:8080/",
    headers: { "Content-Type": "application/json" },
    timeout: 10_000,
})
api.interceptors.response.use(
    (response) => { return response; },
    (error) => {
        if (error.response) {
            const { status, data } = error.response;
            if (status === 400 || status === 404 || status === 500) {
                message.error(data.message || "An error occurred. Please try again.");
            }
        }
        return Promise.reject(error);
    }
);
export { api }