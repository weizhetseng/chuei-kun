import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import qs from 'qs'
import axios from 'axios'

//line登入規則
export const uselineLogin = defineStore('lineLogin', () => {
  //跳轉驗證網址
  function lineLoginBtn() {
    let URL = 'https://access.line.me/oauth2/v2.1/authorize?'
    URL += 'response_type=code'
    URL += `&client_id=${import.meta.env.VITE_Client_Id_Line}`
    URL += '&redirect_uri=http://localhost:8088/login'
    URL += '&state=line1234'
    URL += '&prompt=consent'
    URL += '&scope=profile%20openid'
    window.location.href = URL
  }
  //擷取跳轉回的網址數據
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  const code = query.code
  const state = query.state

  //如果state值相同 則獲取access_token
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: `${import.meta.env.VITE_Client_Id_Line}`,
      password: `${import.meta.env.VITE_Client_Secret_Line}`
    }
  }
  const data = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://localhost:8088/login'
  }
  const access_token = ref('')
  if (state === 'line1234') {
    axios
      .post('https://api.line.me/oauth2/v2.1/token', qs.stringify(data), config)
      .then((response) => {
        access_token.value = response.data.access_token
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { lineLoginBtn, access_token }
})

//google登入規則
export const usegoogleLogin = defineStore('googleLogin', () => {
  //跳轉驗證網址
  function googleLoginBtn() {
    let URL = 'https://accounts.google.com/o/oauth2/auth?'
    URL += `client_id=${import.meta.env.VITE_Client_Id_Google}`
    URL += '&redirect_uri=http://localhost:8088/login'
    URL += '&response_type=code'
    URL += '&scope=profile%20openid'
    URL += '&state=google1234'
    URL += '&prompt=consent'
    window.location.href = URL
  }

  //擷取跳轉回的網址數據
  const query = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  const code = query.code
  const state = query.state

  //如果state值相同 則獲取access_token
  const access_token = ref('')
  const userinfo = ref([])
  if (state === 'google1234') {
    axios
      .post(`https://oauth2.googleapis.com/token`, {
        code,
        client_id: `${import.meta.env.VITE_Client_Id_Google}`,
        client_secret: `${import.meta.env.VITE_Client_Secret_Google}`,
        redirect_uri: 'http://localhost:8088/login',
        grant_type: 'authorization_code'
      })
      .then((response) => {
        access_token.value = response.data.access_token
        axios
          .get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: { Authorization: `Bearer ${access_token.value}` }
          })
          .then((response) => {
            userinfo.value = response.data
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return { googleLoginBtn, access_token, userinfo }
})
