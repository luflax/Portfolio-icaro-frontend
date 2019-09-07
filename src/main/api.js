import axios from 'axios'

let url = ''

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
    url = 'http://localhost:3333'
else
    url = 'http://pico-back.herokuapp.com'

const api = axios.create({
    baseURL: url
})

const protectedApi = axios.create({
    baseURL: `${url}/api`,
    headers: {
        post:{
            authorization: localStorage.authToken
        }
    }
})

export const staticFilesPath = '/files'

export {api, protectedApi}