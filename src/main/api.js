import axios from 'axios'

const api = axios.create({
    baseURL: 'http://pico-back.herokuapp.com'//'http://localhost:3333'
})

export const staticFilesPath = '/files'

export default api