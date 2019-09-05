import axios from "axios";

const api = axios.create({
    baseURL: "https://stickerio-api.herokuapp.com/"
});

export default api;
