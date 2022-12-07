import axios from 'axios'

export const getCourse = async () => {
    try {
        return await axios.get('http://localhost:5000/courses', { headers: { authorization: localStorage.getItem('tkn') } });
    } catch (error) {
        console.log('Err', error.message)
    }
}

export const createCourse = async (data) => {
    try {
        await axios.post(`http://localhost:5000/courses/`, data, { headers: { authorization: localStorage.getItem('tkn') } })
    } catch (error) {
        console.log('Err', error.message);
    }
}

export const deleteCourse = async (id) => {
    try {
        return await axios.delete(`http://localhost:5000/courses/${id}`, { headers: { authorization: localStorage.getItem('tkn') } })
    } catch (error) {
        console.log('Err', error.message);
    }
}

export const updateCourse = async (id, data) => {
    try {
        return await axios.patch(`http://localhost:5000/courses/${id}`, data, { headers: { authorization: localStorage.getItem('tkn') } })
    } catch (error) {
        console.log('Err', error.message);
    }
}