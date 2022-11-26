import Axios from 'axios'

export const getTeachers = async() =>{
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/teachers/`)
}

export const getTeacherById = async(id) =>{
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/teachers/${id}`)
}

export const createTeacher = async() =>{
    await Axios.post(`${process.env.REACT_APP_SERVER_URL}/teachers/`)
}

export const deleteTeacher = async(id) =>{
    await Axios.delete(`${process.env.REACT_APP_SERVER_URL}/teachers/${id}`)
}

export const updateTeacher = async(id) =>{
    await Axios.patch(`${process.env.REACT_APP_SERVER_URL}/teachers/${id}`)
}