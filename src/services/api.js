import axios from "axios";

const api = axios.create({
    baseURL: "https://renan-nodeapi.herokuapp.com/"
});

export default api;
