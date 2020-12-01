import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com',
})

export default api
