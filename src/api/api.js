// const userRequest = axios.create({
//   baseURL: `${import.meta.env.VITE_APP_API}`
// })
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

import axios from 'axios'

const userRequest = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}`
})
// userRequest.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'


userRequest.interceptors.request.use(request => {
  const token = $cookies.get('AuthToken')
  if (token) {
    request.headers['Authorization'] = 'Bearer ' + token;
    return request;
  }
  return request;

}, error => {
  return Promise.reject(error);
});




//* 大分類
//todo api做甚麼的

//todo 取得加密key
export const apiLoginEncrypt = (data) => userRequest.post('API_App/MemberCenter/LoginEncrypt', data)
//todo 登入
export const apiWebLogin = (data) => userRequest.post('API_App/MemberCenter/WebLogin', data)
//todo 註冊
export const apiRegister = (data) => userRequest.post('API_App/MemberCenter/Register', data)
//todo 舊會員手機認證
export const apiOldAccountVerify = (data) => userRequest.post('API_App/MemberCenter/OldAccountVerify', data)
// todo 取得會員資料
export const apiGetData = (data) => userRequest.post('API_App/MemberCenter/GetData', data)
// todo 更新會員資料(變更密碼)
export const apiUpdateData = (data) => userRequest.post('API_App/MemberCenter/UpdateData', data)

//* 共用功能
//todo 發送驗證碼
export const apiSendVerifyCode = (data) => userRequest.post('API_App/ShareFunction/SendVerifyCode', data)
//todo 取得縣市鄉鎮街道資料
export const apiGetCityCategory = (data) => userRequest.post('API_App/ShareFunction/GetCityCategory', data)


//* 網站公開資料
// todo 取得最新消息分類
export const apiGetNewsClass = (data) => userRequest.post('API_App/WebOpenData/GetNewsClass', data)
// todo 取得最新消息資料
export const apiGetNewsData = (data) => userRequest.post('API_App/WebOpenData/GetNewsData', data)
// todo 取得商品分類
export const apiGetProductClass = (data) => userRequest.post('API_App/WebOpenData/GetProductClass', data)
// todo 取得商品資料
export const apiGetProductData = (data) => userRequest.post('API_App/WebOpenData/GetProductData', data)