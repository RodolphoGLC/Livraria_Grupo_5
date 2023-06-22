
import axios from 'axios';

const AxiosInstance = axios.create({
    //Colocar o seu id do PC 
    baseURL: "http://192.168.1.4:8080/api"
   // baseURL:"http://192.168.1.5:8080/api" //sant

});
