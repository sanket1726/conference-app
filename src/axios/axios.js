import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences",
  timeout: 5000,
});

export default instance;
