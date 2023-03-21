import axios from 'axios'

const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}`
})
userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

//* 大分類
//todo api做甚麼的
export const api名稱 = (data) => userRequest.post('api', data)
