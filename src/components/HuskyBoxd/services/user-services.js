import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;
// const OMDB_BASE = "http://www.omdbapi.com/?plot=full&apikey=436c0bf1&i=";
// const IMDB_BASE = "https://imdb-api.com/en/API/Images/k_24vn94nx/";
const api="http://localhost:4000/api/users/"
const USER_UPDATE_API = "http://localhost:4000/api/users/update"

export const findUserByID = async (userID) => {
    const response = await axios.get(api+userID);
    return response.data;
}


//My add movie service.
export const updateFavoriteMovie = async (userID, movieID) => {
    const response = await axios.put(`${USER_UPDATE_API}/favourite/` + userID, {movieID});
    return response.data;
}

export const updateHistoryMovie = async (userID, movieID) => {
    const response = await axios.put(`${USER_UPDATE_API}/history/` + userID, {movieID});
    return response.data;
}


export const updateUser = async (userId, username, email, id) => {
    const response = await axios.put(`${api}` + userId, {username, email, id});
    return response.data;
}


export const updateUserReal = async (userId, realUser) => {
    const response = await axios.put(`${api}` + userId, {realUser});
    return response.data;
}