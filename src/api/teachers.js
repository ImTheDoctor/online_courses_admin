import axios from 'axios'

export const getTeachers = async () => {
    try {
        return await axios.get('http://localhost:5000/teachers', { headers: { authorization: localStorage.getItem('tkn') } });
    } catch (error) {
        console.log('Err', error.message)
    }
}

// export const getTeacherById = async(id) =>{
//     await axios.get(`${process.env.REACT_APP_SERVER_URL}/teachers/${id}`)
// }

export const createTeacher = async (data) => {
    try {
        await axios.post(`http://localhost:5000/teachers`, data, { headers: { authorization: localStorage.getItem('tkn') } })
    } catch (error) {
        console.log('Err', error.message);
    }
}

export const deleteTeacher = async (id) => {
    try {
        return await axios.delete(`http://localhost:5000/teachers/${id}`, { headers: { authorization: localStorage.getItem('tkn') } })
    } catch (error) {
        console.log('Err', error.message);
    }
}

export const updateTeacher = async (id, data) => {
    try {
        return await axios.patch(`http://localhost:5000/teachers/${id}`, data, { headers: { authorization: localStorage.getItem('tkn') } })
        //console.log(id, data);
    } catch (error) {
        console.log('Err', error.message);
    }
}