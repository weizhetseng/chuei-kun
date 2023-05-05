<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <form action="" class="w-full xs:w-2/3 m-auto" @submit.prevent="updateUser()">
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name">姓名</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="name" type="text"
            placeholder="請輸入姓名" v-model="memberData.Name" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <div class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]">性別</div>
          <div class="flex gap-5">
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="male" :value="1" v-model="memberData.Sex" />
              <label for="male">男</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="female" :value="0" v-model="memberData.Sex" />
              <label for="female">女</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" v-model="memberData.Birthday" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" v-model="memberData.Email" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ">驗證碼</label>
          <input class="w-full outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" id="emailQ" type="text"
            placeholder="請輸入驗證碼" v-model="memberData.AuthCode" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" v-model="memberData.Tel" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
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
              v-model="memberData.City">
              <option disabled value="">請選擇縣市</option>
              <option v-for="city in cityList" :key="city.Id" :value="city.Id">{{ city.Title }}</option>
            </select>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id=""
              v-model="memberData.Area">
              <option disabled value="">請選擇鄉鎮區</option>
              <option v-for="area in filteredAreaList" :key="area.Id" :value="area.Id">{{ area.Title }}</option>
            </select>
            <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id=""
              v-model="memberData.Road">
              <option disabled value="">請選擇街道</option>
              <option v-for="road in filteredRoadList" :key="road.Id" :value="road.Id">{{ road.Title }}</option>
            </select>
          </div>

        </div>
        <div class="flex flex-col gap-5 mb-16 xs:flex-row">
          <label class="hidden xs:w-[100px] xs:block" for=""></label>
          <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text" placeholder="請輸入詳細地址"
            v-model="memberData.Address" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <button class="buttonStyle2 group" type="reset">
            <span class="btnWordStyle2">清除</span>
          </button>
          <button class="buttonStyle group" type="submit">
            <span class="btnWordStyle">送出</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
//模組引入
import { computed, onMounted, ref } from 'vue'
//組件引入
import btn_memberList from '../../components/btn_memberList.vue'
import { apiGetCityCategory, apiGetData, apiUpdateData } from '../../api/api'

const memberData = ref({
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


function getMemberData() {
  apiGetData({
    u_id: $cookies.get('u_id'),
    AuthCode: "0",
    Lang: "tw"
  })
    .then((res) => {
      memberData.value = res.data
      console.log(memberData)
    })
    .catch((err) => {
      console.log(err)
    })
}

const cityList = ref([])
const areaList = ref([])
const roadList = ref([])
const isError01 = ref(false)
const isError02 = ref(false)


const filteredAreaList = computed(() => {
  return areaList.value.filter(area => area.CityId === memberData.value.City)
})

const filteredRoadList = computed(() => {
  return roadList.value.filter(road => road.AreaId === memberData.value.Area)
})

console.log('test')

async function getCityData() {
  try {
    const res = await apiGetCityCategory({
      u_id: $cookies.get('u_id') ?? '',
      Lang: 'tw'
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
      console.log(res.data)
    }
  } catch (err) {
    console.log(err)
    alert('目前系統繁忙，暫時無法處理您的要求，請稍後在試')
  }
}

function updateUser() {
  apiUpdateData(memberData.value)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}


onMounted(() => {
  getCityData()
  getMemberData()
})
</script>
