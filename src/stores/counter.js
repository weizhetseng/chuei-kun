/* eslint-disable no-undef */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import qs from 'qs'
import axios from 'axios'
import dayjs from 'dayjs';
import CryptoJS from "crypto-js";
import { useRouter, useRoute } from 'vue-router'
import { apiLoginEncrypt, apiWebLogin, apiGetProductClass, apiGetProductData, apiRegister, apiUpdateData, apiGetCityCategory, apiSendVerifyCode, apiGetNewsData, apiGetNewsClass, apiGetData, apiGetOrderData } from '../api/api'
import router from '../router';

//! 導覽列控制項
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

//! line登入規則
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

//! google登入規則
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

//! 返回上一頁
export const useGoBack = defineStore('goBack', () => {
  const router = useRouter()
  function goBackBtn() {
    router.back()
  }

  return { goBackBtn }
})

//! 發送驗證碼
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

//! 註冊
export const useRegister = defineStore('register', () => {

  const NewUser = ref({
    Mobile: "",
    Auth_Mobile: "",
    Email: "",
    Auth_Email: "",
    Password: "",
    Name: "",
    Sex: -1,
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
      Lang: $cookies.get("Lang")
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
      Lang: $cookies.get("Lang")
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

//! 取得會員資料
export const useGetMemberData = defineStore('getMemberData', () => {

  const memberData = ref({})
  function getMemberData() {
    apiGetData({
      u_id: $cookies.get('u_id'),
      AuthCode: "0",
      Lang: $cookies.get("Lang")
    })
      .then((res) => {
        memberData.value = res.data
        console.log('pinia', res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { getMemberData, memberData }
})







//* 2023/05/10 

//! 登入
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
    u_id: 'gf13god@gmail.com',
    PW: 'J0FX6J02',
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
          $cookies.set('AuthToken', res.data.AuthToken, 0)
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

//! 取得訂單資料
export const useOrderData = defineStore('orderData', () => {
  const OrderList = ref([])
  const OrderListData = ref([])

  function GetOrderData(OrderId = '') {
    apiGetOrderData({
      u_id: $cookies.get('u_id'),
      AuthCode: "0",
      Lang: $cookies.get('Lang'),
      OrderId: OrderId
    })
      .then((res) => {
        console.log(res)
        if (OrderId != '') {
          OrderListData.value = res.data.OrderDataList[0];
        } else {
          OrderList.value = res.data.OrderDataList;
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { OrderList, OrderListData, GetOrderData }
})

//! 取得最新消息
export const useGetNewsClass = defineStore('getNewsClass', () => {

  const newsList = ref([])

  async function getNewsClass() {
    try {
      const res = await apiGetNewsClass({
        u_id: $cookies.get('u_id') ?? '',
        AuthCode: "0",
        Lang: $cookies.get('Lang')
      });
      newsList.value = res.data.NewsClassList;
    } catch (error) {
      console.error(error);
    }
  }

  const newsData = ref([])
  const newsDetailData = ref([])

  // 當前頁面
  const currentPage = ref(1)
  // 當前顯示資料
  const currentData = ref([])
  // 總頁數
  const totalPage = ref(0)
  // 頁碼最大顯示數量
  const maxDisplayPages = 5
  // 當前顯示頁碼
  const displayPages = ref([])

  //將取得的資料分組
  function getNeedArr(array, size) {
    const length = array.length
    if (!length || !size || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    let result = new Array(Math.ceil(length / size))

    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size))
    }

    return result
  }

  //當前頁面
  function handleCurrentPage(page) {
    currentPage.value = page
    getNewsData()
  }

  // 計算頁碼
  function getNeedPages() {
    let start, end;
    if (totalPage.value != null) {
      if (totalPage.value <= maxDisplayPages) {
        start = 1;
        end = totalPage.value;
      } else if (currentPage.value <= Math.ceil(maxDisplayPages / 2)) {
        start = 1;
        end = maxDisplayPages;
      } else if (currentPage.value >= totalPage.value - Math.floor(maxDisplayPages / 2)) {
        start = totalPage.value - maxDisplayPages + 1;
        end = totalPage.value;
      } else {
        start = currentPage.value - Math.floor(maxDisplayPages / 2);
        end = currentPage.value + Math.floor(maxDisplayPages / 2);
      }
    }
    displayPages.value = Array(end - start + 1).fill().map((_, index) => start + index);
  }
  //上一頁
  function prevPage() {
    currentPage.value--
    if (currentPage.value < 1) {
      currentPage.value = 1
    }
    getNewsData()
  }

  // 下一頁
  function nextPage() {
    currentPage.value++
    if (currentPage.value >= totalPage.value) {
      currentPage.value = totalPage.value
    }
    getNewsData()
  }

  const route = useRoute()

  function getNewsData(ClassId, Id) {
    apiGetNewsData({
      u_id: $cookies.get('u_id') ?? '',
      AuthCode: "0",
      Lang: $cookies.get('Lang'),
      ClassId: ClassId ?? route.params.ClassId,
      Id: Id ?? 0
    })
      .then((res) => {
        if (ClassId && Id) {
          newsDetailData.value = res.data.NewsList[0];
          console.log(res)
        } else {
          newsData.value = res.data.NewsList
          totalPage.value = Math.ceil(res.data.NewsList.length / res.data.PageSize);
          currentData.value = getNeedArr(res.data.NewsList, res.data.PageSize)[currentPage.value - 1];
          getNeedPages()
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const activeClassId = computed(() => {
    if (newsData.value.length > 0) {
      return newsData.value[0].ClassId
    } else {
      return null
    }
  })

  getNewsClass()
  getNewsData()

  return { newsList, newsData, getNewsClass, getNewsData, activeClassId, newsDetailData, currentPage, currentData, displayPages, prevPage, nextPage, handleCurrentPage }
})

//! 更新會員資料
export const useUpdateData = defineStore('updateData', () => {

  const newUserData = ref({
    u_id: "",
    AuthCode: "",
    Lang: "",
    Name: "",
    Sex: 0,
    Birthday: "",
    Email: "",
    Auth_Email: "",
    Tel: "",
    City: 0,
    Area: 0,
    Road: 0,
    Address: "",
    OldPassword: "",
    NewPassword: ""
  })

  function getUserData() {
    apiGetData({
      u_id: $cookies.get('u_id'),
      AuthCode: "0",
      Lang: $cookies.get('Lang')
    })
      .then((res) => {
        console.log(res)
        const { Uid, Name, Sex, Birthday, Email, Tel, City, Area, Road, Address } = res.data
        newUserData.value = {
          u_id: Uid,
          Name,
          Sex,
          Birthday,
          Email,
          Tel,
          City,
          Area,
          Road,
          Address
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getUserData()

  const cityList = ref([])
  const areaList = ref([])
  const roadList = ref([])
  const isError01 = ref(false)
  const isError02 = ref(false)

  function getCityData() {
    apiGetCityCategory({
      u_id: $cookies.get('u_id') ?? '',
      Lang: $cookies.get("Lang")
    })
      .then((res) => {
        const errorCodes = ['90', '97', '98'];
        const logoutCodes = ['91', '92', '93', '94', '95', '96'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。")
          isError02.value = true
        } else if (errorCodes.includes(checkNum)) {
          alert(res.data.message.substr(3))
        } else if (logoutCodes.includes(checkNum)) {
          alert(res.data.message.substr(3))
          //登出使用者
        } else if (checkNum === "01") {
          isError01.value = true
        } else {
          cityList.value = res.data.CityList
          areaList.value = res.data.AreaList
          roadList.value = res.data.RoadList
          console.log(res)
        }
      })
      .catch((err) => {
        console.log(err)
        alert('目前系統繁忙，暫時無法處理您的要求，請稍後在試')
      })
  }

  const filteredAreaList = computed(() => {
    return areaList.value.filter(area => area.CityId === newUserData.value.City)
  })

  const filteredRoadList = computed(() => {
    return roadList.value.filter(road => road.AreaId === newUserData.value.Area)
  })

  getCityData()

  function updateData() {
    apiUpdateData(newUserData.value)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return { newUserData, cityList, filteredAreaList, filteredRoadList, updateData }
})

//! 發送驗證碼功能
export const useSendVerifyCode = defineStore('sendVerifyCode', () => {
  function startCountdown(countdown, timer) {
    countdown.value = 300
    timer.value = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) {
        clearInterval(timer.value)
      }
    }, 1000)
  }

  //? 手機驗證碼判斷
  const phoneIsSend = ref(false)
  const phoneCountdown = ref(0)
  const phoneTimer = ref(null)


  function sendPhoneVerifyCode(newUser) {
    apiSendVerifyCode({
      AuthType: 2,
      AuthData: newUser,
      Lang: $cookies.get("Lang")
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


  //? email驗證碼判斷
  const emailIsSend = ref(false)
  const emailCountdown = ref(0)
  const emailTimer = ref(null)

  function sendMailVerifyCode(newUser) {
    apiSendVerifyCode({
      AuthType: 1,
      AuthData: newUser,
      Lang: $cookies.get("Lang")
    })
      .then((res) => {
        const errorCodes1 = ['01', '97', '98'];
        let checkNum = res.data.message.substr(0, 2);
        if (parseInt(checkNum) <= 0) {
          alert("系統忙碌中，請稍後嘗試重新載入頁面。");
        } else if (errorCodes1.includes(checkNum)) {
          alert(res.data.message.substr(3));
          console.log(res)
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
  return { sendPhoneVerifyCode, sendMailVerifyCode, phoneCountdown, emailCountdown }
})



//! 取得商品資料
export const useGetProduct = defineStore('getProduct', () => {

  const productList = ref([])

  function getProductClass() {
    apiGetProductClass({
      u_id: $cookies.get('u_id'),
      AuthCode: "0",
      Lang: $cookies.get('Lang')
    })
      .then((res) => {
        productList.value = res.data.ProductClassList
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const productData = ref([])
  const productDetailData = ref([])
  // 當前頁面
  const currentPage = ref(1)
  // 當前顯示資料
  const currentData = ref([])
  // 總頁數
  const totalPage = ref(0)
  // 頁碼最大顯示數量
  const maxDisplayPages = 5;
  // 當前顯示頁碼
  const displayPages = ref([])

  //將取得的資料分組
  function getNeedArr(array, size) {
    const length = array.length
    if (!length || !size || size < 1) {
      return []
    }
    let index = 0
    let resIndex = 0
    let result = new Array(Math.ceil(length / size))

    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size))
    }

    return result
  }

  //當前頁面
  function handleCurrentPage(page) {
    currentPage.value = page
    getProductData()
  }

  // 計算頁碼
  function getNeedPages() {
    let start, end;
    if (totalPage.value != null) {
      if (totalPage.value <= maxDisplayPages) {
        start = 1;
        end = totalPage.value;
      } else if (currentPage.value <= Math.ceil(maxDisplayPages / 2)) {
        start = 1;
        end = maxDisplayPages;
      } else if (currentPage.value >= totalPage.value - Math.floor(maxDisplayPages / 2)) {
        start = totalPage.value - maxDisplayPages + 1;
        end = totalPage.value;
      } else {
        start = currentPage.value - Math.floor(maxDisplayPages / 2);
        end = currentPage.value + Math.floor(maxDisplayPages / 2);
      }
    }
    displayPages.value = Array(end - start + 1).fill().map((_, index) => start + index);
  }
  //上一頁
  function prevPage() {
    currentPage.value--
    if (currentPage.value < 1) {
      currentPage.value = 1
    }
    getProductData()
  }

  // 下一頁
  function nextPage() {
    currentPage.value++
    if (currentPage.value >= totalPage.value) {
      currentPage.value = totalPage.value
    }
    getProductData()
  }


  const route = useRoute()


  function getProductData(ClassId, Pidno, Keyword) {
    apiGetProductData({
      u_id: $cookies.get('u_id') ?? '',
      AuthCode: "0",
      Lang: $cookies.get('Lang'),
      ProductClassId: ClassId ?? route.params.id,
      Pidno: Pidno ?? "",
      Keyword: Keyword ?? ""
    })
      .then((res) => {
        if (ClassId && Pidno) {
          productDetailData.value = res.data.ProductList[0];
        } else {
          productData.value = res.data.ProductList
          totalPage.value = Math.ceil(res.data.ProductList.length / res.data.PageSize);
          currentData.value = getNeedArr(res.data.ProductList, res.data.PageSize)[currentPage.value - 1];
          getNeedPages()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }


  getProductData()
  getProductClass()



  return { productList, getProductClass, getProductData, productData, currentData, productDetailData, totalPage, displayPages, handleCurrentPage, nextPage, prevPage, currentPage }
})