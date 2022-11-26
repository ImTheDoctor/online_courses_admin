import Axios from 'axios'

export const getCourse = async () => {
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/courses/`)
}

export const getUserById = async (id) => {
    await Axios.get(`${process.env.REACT_APP_SERVER_URL}/courses/${id}`)
}

export const createCourse = async () => {
    await Axios.post(`${process.env.REACT_APP_SERVER_URL}/courses/`)
}

export const deleteUser = async (id) => {
    await Axios.delete(`${process.env.REACT_APP_SERVER_URL}/courses/${id}`)
}

export const updateUser = async (id) => {
    await Axios.patch(`${process.env.REACT_APP_SERVER_URL}/courses/${id}`)
}


