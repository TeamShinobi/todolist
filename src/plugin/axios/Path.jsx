import axios from "axios";

axios.defaults.baseURL = `http://10.0.2.2:8000/api/v1/`;
axios.defaults.headers.post[`Content-Type`] = `application/json`;

export default axios;
