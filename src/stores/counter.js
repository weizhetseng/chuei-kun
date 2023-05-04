/* eslint-disable no-undef */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import qs from 'qs'
import axios from 'axios'
import dayjs from 'dayjs';
import CryptoJS from "crypto-js";
import { useRouter } from 'vue-router'
import { apiLoginEncrypt, apiWebLogin, apiRegister, apiSendVerifyCode } from '../api/api'
import router from '../router';

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
    countdown.value = 300
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


//登入
export const useWebLogin = defineStore('webLogin', () => {
  // 加密
  function encrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : "absoietlj32fai12";
    ivStr = ivStr ? ivStr : "absoietlj32fai12";
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);

    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
  }


  // 取得登入用動態驗證碼
  const GetKeyRequest = {
    Lang: "tw"
  }
  let authkey = "";
  let authiv = "";
  function getKey() {
    apiLoginEncrypt(GetKeyRequest)
      .then((res) => {
        let checkNum = res.data.message.substr(0, 2);
        const logoutCodes = ['91', '92', '93', '94', '95', '96'];
        const errorCodes = ['97', '98'];

        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
          history.back()
        } else if (logoutCodes.includes(checkNum)) {
          alert(res.data.message.substr(3));
          //做登出動作
        } else if (errorCodes.includes(checkNum)) {
          alert(res.data.message.substr(3));
        } else {
          authkey = res.data.Key
          authiv = res.data.IV
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const router = useRouter();

  const loginStatus = ref(false);

  // 會員帳密(綁)
  const User = {
    u_id: '',
    PW: '',
    Lang: 'tw'
  }
  // 會員帳密(傳)
  const WebLoginRequest = {
    u_id: '',
    RA: '',
    Lang: "tw"
  }

  function webLogin() {
    let uid = User.u_id;
    let pwd = User.PW;
    let RA = encrypt("0000000000000000" + `${import.meta.env.VITE_APP_PROJECT};` + pwd + ";" + dayjs().format('YYYY-MM-DD HH:mm:ss') + ";", authkey, authiv);
    WebLoginRequest.u_id = uid;
    WebLoginRequest.RA = RA;
    apiWebLogin(WebLoginRequest)
      .then((res) => {
        const errorCodes1 = ['94', '95', '97', '98'];
        const errorCodes2 = ['01', '02', '03', '04'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
        } else if (errorCodes1.includes(checkNum)) {
          alert(res.data.message.substr(3));
        } else if (errorCodes2.includes(checkNum)) {
          alert(res.data.message.substr(3));
        } else if (checkNum === "05") {
          alert(res.data.message.substr(3));
          //跳轉舊會員手機認證
          router.push('/oldmember')
        } else {
          //跳轉產品頁
          $cookies.set('u_id', res.data.Uid, 0)
          loginStatus.value = true
          router.push('/product/shopMethod1')
        }
      })
      .catch((err) => {
        console.log(err)
      })


  }

  return { getKey, User, webLogin, loginStatus }
})


export const useRegister = defineStore('register', () => {

  const NewUser = ref({
    Mobile: "",
    Auth_Mobile: "",
    Email: "",
    Auth_Email: "",
    Password: "",
    Name: "",
    Sex: 0,
    Birthday: "",
    Tel: "",
    City: 0,
    Area: 0,
    Road: 0,
    Address: "",
    Lang: "tw"
  })

  //倒數計時器
  function startCountdown(countdown, timer) {
    countdown.value = 300
    timer.value = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) {
        clearInterval(timer.value)
      }
    }, 1000)
  }

  // email驗證碼判斷
  const emailIsSend = ref(false)
  const emailCountdown = ref(0)
  const emailTimer = ref(null)

  function SendMailCode() {
    apiSendVerifyCode({
      AuthType: 1,
      AuthData: NewUser.value.Email,
      Lang: "tw"
    })
      .then((res) => {
        const errorCodes1 = ['01', '97', '98'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
        } else if (errorCodes1.includes(checkNum)) {
          console.log(checkNum)
          alert(res.data.message.substr(3));
        } else {
          emailIsSend.value = true
          startCountdown(emailCountdown, emailTimer)
          console.log(res.data.message.substr(3))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // 手機驗證碼判斷
  const phoneIsSend = ref(false)
  const phoneCountdown = ref(0)
  const phoneTimer = ref(null)

  function SendPhoneCode() {
    apiSendVerifyCode({
      AuthType: 2,
      AuthData: NewUser.value.Mobile,
      Lang: "tw"
    })
      .then((res) => {
        const errorCodes1 = ['01', '97', '98'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
        } else if (errorCodes1.includes(checkNum)) {
          alert(res.data.message.substr(3));
        } else {
          phoneIsSend.value = true
          startCountdown(phoneCountdown, phoneTimer)
          console.log(res.data.message.substr(3))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  function sendRegister() {
    apiRegister(NewUser.value)
      .then((res) => {
        const errorCodes1 = ['01', '97', '98'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
        } else if (errorCodes1.includes(checkNum)) {
          alert(res.data.message.substr(3));
          console.log(res)
        } else {
          NewUser.value = {}
          router.push('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { NewUser, SendMailCode, SendPhoneCode, sendRegister, phoneCountdown, emailCountdown }
})





