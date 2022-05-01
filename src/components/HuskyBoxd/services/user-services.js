import axios from 'axios';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;
const USER_API="http://localhost:4000/api/users/"

export const findUserByID = async (userID) => {
    const response = await axios.get(USER_API+userID);
    return response.data;
}

export const updateFavoriteMovie = async (userID, movieID) => {
    const response = await axios.put(`${USER_API}update/favorite/` + userID, {movieID});
    return response.data;
}

export const updateHistoryMovie = async (userID, movieID) => {
    const response = await axios.put(`${USER_API}update/history/` + userID, {movieID});
    return response.data;
}


export const updateUser = async (userId, username, email, realID) => {
    const response = await axios.put(`${USER_API}` + userId, {username, email, realID});
//     const response = await axios.put(`${api}` + userId, {username, email, realID});
     return response.data;
}

export const updateUserReal = async (userId, realUser) => {
    const response = await axios.put(`${USER_API}` + userId, {realUser});
    return response.data;
}