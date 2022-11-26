import Axios from 'axios'

export const getUsers = async() =>{
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/users/`)
}

export const getUserById = async(id) =>{
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
}

export const deleteUser = async(id) =>{
    await Axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
}

export const updateUser = async(id) =>{
    await Axios.patch(`${process.env.REACT_APP_SERVER_URL}/users/${id}`)
}