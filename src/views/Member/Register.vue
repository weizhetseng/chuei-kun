<template>
  <btn_banner />
  <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
    <div class="container">
      <btn_breadcrumb />
      <div class="titleStyle mb-9">
        <h2 class="text-4xl text-Mred font-bold">會員註冊</h2>
        <p>Sign Up</p>
      </div>
      <Form v-slot="{ errors }" action="" class="m-auto mb-20 sm:w-4/5 lg:w-3/5" @submit="Register.sendRegister()">
        <p class="text-Wred mb-3">*為必填項目</p>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="phone"><span
              class="text-Wred">*</span>手機號碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="phone" name="phone"
            type="text" label="手機號碼" :class="{ 'is-invalid': errors['phone'] }" placeholder="請輸入手機號碼" rules="required"
            v-model="Register.NewUser.Mobile">
          </Field>
          <error-message name="phone" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
          <button
            class="absolute bg-Mred text-white py-[2px] px-5 right-0 bottom-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow"
            type="button" @click="Register.SendPhoneCode()" :disabled="Register.phoneCountdown !== 0">
            {{ Register.phoneCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${Register.phoneCountdown})` }}
          </button>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="phoneQ"><span
              class="text-Wred">*</span>驗證碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="phoneCode" name="phoneCode"
            type="text" label="驗證碼" :class="{ 'is-invalid': errors['phoneCode'] }" placeholder="請輸入手機驗證碼" rules="required"
            v-model="Register.NewUser.Auth_Mobile">
          </Field>
          <error-message name="phoneCode"
            class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email"><span
              class="text-Wred">*</span>電子信箱</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email" name="email"
            type="text" label="電子信箱" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入Email"
            rules="email|required" v-model="Register.NewUser.Email">
          </Field>
          <error-message name="email" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
          <button
            class="absolute bg-Mred text-white py-[2px] px-5 right-0 bottom-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow"
            type="button" @click="Register.SendMailCode()" :disabled="Register.emailCountdown !== 0">
            {{ Register.emailCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${Register.emailCountdown})` }}
          </button>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ"><span
              class="text-Wred">*</span>驗證碼</label>

          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="emailCode" name="emailCode"
            type="text" label="驗證碼" :class="{ 'is-invalid': errors['emailCode'] }" placeholder="請輸入Email信驗證碼"
            rules="required" v-model="Register.NewUser.Auth_Email">
          </Field>
          <error-message name="emailCode"
            class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="pw"><span
              class="text-Wred">*</span>密碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="password1" name="password1"
            type="text" label="密碼" :class="{ 'is-invalid': errors['password1'] }" placeholder="請輸入4~12個字元，請勿使用空白或「＠」等特殊符號"
            :rules="{ regex: /^[^\s@]{4,12}$/, required: true }" v-model="Register.NewUser.Password">
          </Field>
          <error-message name="password1"
            class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row relative">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="pw2"><span
              class="text-Wred">*</span>確認密碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="password2" name="password2"
            type="text" label="確認密碼" :class="{ 'is-invalid': errors['password2'] }" placeholder="請再輸入一次密碼"
            rules="required">
          </Field>
          <error-message name="password2"
            class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 relative xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name"><span
              class="text-Wred">*</span>姓名</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="userName" name="userName"
            type="text" label="姓名" :class="{ 'is-invalid': errors['userName'] }" placeholder="請輸入姓名" rules="required"
            v-model="Register.NewUser.Name">
          </Field>
          <error-message name="userName" class="block absolute right-0 -bottom-6 text-red-700"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <div class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]">
            性別
          </div>
          <div class="flex gap-5">
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="male" :value="1" v-model="Register.NewUser.Sex" />
              <label for="male">男</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="female" :value="0" v-model="Register.NewUser.Sex" />
              <label for="female">女</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="myDate dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" v-model="Register.NewUser.Birthday" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" v-model="Register.NewUser.Tel" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
          <div v-if="cityList.length <= 0">
            <select disabled>
              <option>載入中</option>
            </select>
          </div>
          <div v-else-if="isError02">
            <select disabled>
              <option>載入失敗</option>
            </select>
          </div>
          <div v-else-if="isError01">
            <select disabled>
              <option>因偵測到您的網路位址對本站發出異常請求，因此無法正常載入資料，請嘗試更換使用裝置，或稍後再次嘗試。如有任何疑問，請洽詢本站客服協助，造成您的不便敬請見諒。</option>
            </select>
          </div>
          <div class="w-full flex flex-col xs:flex-row xs:gap-3 xs:w-[calc(100%-120px)]" v-else>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id=""
              v-model="selectedCityValue" @change="handleCityChange">
              <option disabled value="">請選擇縣市</option>
              <option v-for="city in cityList" :key="city.Id" :value="city.Id">{{ city.Title }}</option>
            </select>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id=""
              v-model="selectedAreaValue" @change="handleAreaChange" :disabled="!selectedCity">
              <option disabled value="">請選擇鄉鎮區</option>
              <option v-for="area in filteredAreaList" :key="area.Id" :value="area.Id">{{ area.Title }}</option>
            </select>
            <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id=""
              v-model="selectedRoadValue" :disabled="!selectedArea">
              <option disabled value="">請選擇街道</option>
              <option v-for="road in filteredRoadList" :key="road.Id" :value="road.Id">{{ road.Title }}</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-16 xs:flex-row">
          <label class="hidden xs:w-[100px] xs:block" for=""></label>
          <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text" placeholder="請輸入詳細地址"
            v-model="Register.NewUser.Address" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <button class="buttonStyle2 group" type="reset">
            <span class="btnWordStyle2">清除</span>
          </button>
          <button class="buttonStyle group" type="submit">
            <span class="btnWordStyle">送出</span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>


import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import { useRegister } from '../../stores/counter.js'
import { apiGetCityCategory } from '../../api/api';
import { computed, onMounted, ref, watch } from 'vue';

const Register = useRegister()


const cityList = ref([])
const areaList = ref([])
const roadList = ref([])
const isError01 = ref(false)
const isError02 = ref(false)

const selectedCity = ref('')
const selectedArea = ref('')
const selectedRoad = ref('')


const filteredAreaList = computed(() => {
  return areaList.value.filter(area => area.CityId === selectedCity.value)
})

const filteredRoadList = computed(() => {
  return roadList.value.filter(road => road.AreaId === selectedArea.value)
})

function handleCityChange() {
  selectedArea.value = ''
  selectedRoad.value = ''
}

function handleAreaChange() {
  selectedRoad.value = ''
}


// 將此頁面的 selected 跟 pinia 的 NewUser 綁定
const selectedCityValue = computed({
  get() {
    return Register.NewUser.City || selectedCity.value
  },
  set(value) {
    Register.NewUser.City = value
    selectedCity.value = value
  }
})

const selectedAreaValue = computed({
  get() {
    return Register.NewUser.Area || selectedArea.value
  },
  set(value) {
    Register.NewUser.Area = value
    selectedArea.value = value
  }
})

const selectedRoadValue = computed({
  get() {
    return Register.NewUser.Road || selectedRoad.value
  },
  set(value) {
    Register.NewUser.Road = value
    selectedRoad.value = value
  }
})
//監聽 選取的選項
watch(selectedCity, () => {
  if (!filteredAreaList.value.some(area => area.Id === selectedArea.value)) {
    selectedArea.value = ''
  }

  if (!filteredRoadList.value.some(road => road.Id === selectedRoad.value)) {
    selectedRoad.value = ''
  }
})

//取得縣市鄉鎮街道資料
async function getCityData() {
  try {
    const res = await apiGetCityCategory({
      u_id: $cookies.get('u_id') ?? '',
      Lang: $cookies.get("Lang")
    })

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
  } catch (err) {
    console.log(err)
    alert('目前系統繁忙，暫時無法處理您的要求，請稍後在試')
  }
}

onMounted(() => {
  getCityData()
})

</script>
