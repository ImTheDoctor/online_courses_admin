import Axios from 'axios'

export const login = async (data) => {
    await Axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`,
        console.log(data),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(window.location.href = 'https://www.facebook.com/')
        .catch(console.log(err))
}