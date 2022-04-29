import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;
// const OMDB_BASE = "http://www.omdbapi.com/?plot=full&apikey=436c0bf1&i=";
// const IMDB_BASE = "https://imdb-api.com/en/API/Images/k_24vn94nx/";
const api="http://localhost:4000/api/users/"

export const findUserByID = async (userID) => {
    const response = await axios.get(api+userID);
    return response.data;
}





