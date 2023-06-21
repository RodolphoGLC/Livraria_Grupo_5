import axios from "axios";

const AxiosInstance = axios.create({
    //Colocar o seu id do PC 
    baseURL: "http://192.168.0.40:8080/api"
});

export default AxiosInstance;