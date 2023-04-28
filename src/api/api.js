// const userRequest = axios.create({
//   baseURL: `${import.meta.env.VITE_APP_API}`
// })
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

import axios from 'axios'

const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}`
})
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

//* 大分類
//todo api做甚麼的

//todo 取得加密key
export const apiLoginEncrypt = (data) => userRequest.post('API_App/MemberCenter/LoginEncrypt', data)
//todo 登入
export const apiWebLogin = (data) => userRequest.post('API_App/MemberCenter/WebLogin', data)




