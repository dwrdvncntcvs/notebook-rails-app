import axios from "axios";

const axiosClient = new axios.Axios({
    baseURL: "http://127.0.0.1:3001",
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosClient };
