import { ref } from 'vue'
import { defineStore } from 'pinia'
import qs from 'qs'
import axios from 'axios'
import { useRouter } from 'vue-router'

// 導覽列控制項
export const useNavBar = defineStore('NavBar', () => {
  const isNavFixed = ref(false)
  const asideNav = ref(false)
  const newsDropdown = ref(false)
  const shopDropdown = ref(false)

  function openAside() {
    asideNav.value = true
    document.body.style.overflow = 'hidden'
  }
  function closeAside() {
    asideNav.value = false
    document.body.style.overflow = 'auto'
  }
  function toggleNewsDropdown() {
    newsDropdown.value = !newsDropdown.value
    shopDropdown.value = false
  }
  function toggleShopDropdown() {
    shopDropdown.value = !shopDropdown.value
    newsDropdown.value = false
  }
  function scrollTop() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 80) {
      isNavFixed.value = true
    } else {
      isNavFixed.value = false
    }
  }

  return { isNavFixed, asideNav, newsDropdown, shopDropdown, openAside, closeAside, toggleNewsDropdown, toggleShopDropdown, scrollTop }
})

//儲存登入狀態
export const useLoginStatus = defineStore('LoginStatus', () => {

  function updateLoginStatus(event) {
    $cookies.set('loginStatus', event, 0)
  }
  return { updateLoginStatus }
})

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

//返回上一頁
export const useGoBack = defineStore('goBack', () => {
  const router = useRouter()
  function goBackBtn() {
    router.back()
  }

  return { goBackBtn }
})

//發送驗證碼
export const useCodeSend = defineStore('codeSend', () => {
  //倒數計時器
  function startCountdown(countdown, timer) {
    countdown.value = 60
    timer.value = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) {
        clearInterval(timer.value)
      }
    }, 1000)
  }

  // 手機驗證碼判斷
  const phoneIsSend = ref(false)
  const phoneCountdown = ref(0)
  const phoneTimer = ref(null)

  function phoneSendCode() {
    phoneIsSend.value = true
    startCountdown(phoneCountdown, phoneTimer)
  }

  // email驗證碼判斷
  const emailIsSend = ref(false)
  const emailCountdown = ref(0)
  const emailTimer = ref(null)

  function emailSendCode() {
    emailIsSend.value = true
    startCountdown(emailCountdown, emailTimer)
  }

  return { phoneSendCode, emailSendCode, phoneCountdown, emailCountdown }
})




