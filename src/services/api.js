import axios from "axios";

//'https://cors-anywhere.herokuapp.com/http://35.184.1.215'
const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://35.184.1.215',
}) 

export default api;



