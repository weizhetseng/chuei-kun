// import axios from 'axios'

// const userRequest = axios.create({
//   baseURL: `${import.meta.env.VITE_APP_API}`
// })
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// //* 大分類
// //todo api做甚麼的
// export const api名稱 = (data) => userRequest.post('api', data)


import axios from 'axios'

const userRequest = axios.create({
  baseURL: 'http://localhost:3000'
})
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

//* 大分類
//todo api做甚麼的
export const apiLogin = (data) => userRequest.post('/api/login', data)

export const apiNewsList = (data) => userRequest.get('/api/news', data)

export const apiHomeNewsList = (data) => userRequest.get('/api/homeNews', data)

export const apiHomeProductList = (data) => userRequest.get('/api/homeProduct', data)


