import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;
const OMDB_BASE = "http://www.omdbapi.com/?plot=full&apikey=436c0bf1&i=";
const IMDB_BASE = "https://imdb-api.com/en/API/Images/k_24vn94nx/";
//const HUSKY_BASE = "https://localhost:4000/hu/movie";

export const findMovieByID = async (movieID) => {
    const response = await axios.get(OMDB_BASE + movieID);
    return response.data;
}

export const findMovieImgByID = async (movieID) => {
    const response = await axios.get(IMDB_BASE + movieID);
    return response.data;
}

