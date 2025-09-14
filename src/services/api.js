import axios from "axios";

// BASE_URL: https://api.themoviedb.org/3/

// URL_API: movie/now_playing?api_key=0ac9705aaf63159f0dd6dee108a606ae&language=pt-BR



const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});


export default api;

