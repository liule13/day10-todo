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
            if (error.response.status === 404) {
                message.error("Resource not found (404)");
            } else if (error.response.status === 500) {
                message.error("Server error (500)");
            } else {
                message.error(`Error: ${error.response.status}`);
            }
        }
        return Promise.reject(error);
    }
);
export { api }