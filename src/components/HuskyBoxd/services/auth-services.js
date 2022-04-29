import axios from "axios";

const API_URL = "http://localhost:4000/api"
// const api = axios.create({withCredentials: true})

export const signup = async (username, email, password) => {
    const response = await axios.post(`${API_URL}/signup`, {username, email, password})
    return response.data
}

export const signupRealID = async (username, email, password, realID, realUser) => {
    const response = await axios.post(`${API_URL}/signuprealid`, {username, email, password, realID, realUser})
    return response.data
}

export const signin = async (email, password) => {
    const response = await axios.post(`${API_URL}/signin`,
        {email, password})
    return response.data
}

export const profile = async () => {
    const response = await axios.post(`${API_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${API_URL}/logout`)
    return response.data
}