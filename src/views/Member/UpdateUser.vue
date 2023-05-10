<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <form action="" class="w-full xs:w-2/3 m-auto" @submit.prevent="UpdateData.updateData()">
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name">姓名</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="name" type="text"
            placeholder="請輸入姓名" v-model="UpdateData.newUserData.Name" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <div class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]">性別</div>
          <div class="flex gap-5">
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="male" :value="1" v-model="UpdateData.newUserData.Sex" />
              <label for="male">男</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="female" :value="0" v-model="UpdateData.newUserData.Sex" />
              <label for="female">女</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" v-model="UpdateData.newUserData.Birthday" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row relative">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" v-model="UpdateData.newUserData.Email" />
          <button
            class="absolute bg-Mred text-white py-[2px] px-5 right-0 bottom-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow"
            type="button" @click="SendVerifyCode.sendMailVerifyCode(UpdateData.newUserData.Email)"
            :disabled="SendVerifyCode.emailCountdown !== 0">
            {{ SendVerifyCode.emailCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${SendVerifyCode.emailCountdown})` }}
          </button>
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ">驗證碼</label>
          <input class="w-full outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" id="emailQ" type="text"
            placeholder="請輸入驗證碼" v-model="UpdateData.newUserData.AuthCode" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" v-model="UpdateData.newUserData.Tel" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
          <div v-if="UpdateData.cityList.length <= 0">
            <select disabled>
              <option>載入中</option>
            </select>
          </div>
          <div v-else-if="UpdateData.isError02">
            <select disabled>
              <option>載入失敗</option>
            </select>
          </div>
          <div v-else-if="UpdateData.isError01">
            <select disabled>
              <option>因偵測到您的網路位址對本站發出異常請求，因此無法正常載入資料，請嘗試更換使用裝置，或稍後再次嘗試。如有任何疑問，請洽詢本站客服協助，造成您的不便敬請見諒。</option>
            </select>
          </div>
          <div class="w-full flex flex-col xs:flex-row xs:gap-3 xs:w-[calc(100%-120px)]" v-else>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id=""
              v-model="UpdateData.newUserData.City">
              <option disabled value="-1">請選擇縣市</option>
              <option v-for="city in UpdateData.cityList" :key="city.Id" :value="city.Id">{{ city.Title }}</option>
            </select>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id=""
              v-model="UpdateData.newUserData.Area">
              <option disabled value="-1">請選擇鄉鎮區</option>
              <option v-for="area in UpdateData.filteredAreaList" :key="area.Id" :value="area.Id">{{ area.Title }}
              </option>
            </select>
            <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id=""
              v-model="UpdateData.newUserData.Road">
              <option disabled value="-1">請選擇街道</option>
              <option v-for="road in UpdateData.filteredRoadList" :key="road.Id" :value="road.Id">{{ road.Title }}
              </option>
            </select>
          </div>

        </div>
        <div class="flex flex-col gap-5 mb-16 xs:flex-row">
          <label class="hidden xs:w-[100px] xs:block" for=""></label>
          <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text" placeholder="請輸入詳細地址"
            v-model="UpdateData.newUserData.Address" />
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
import btn_memberList from '../../components/btn_memberList.vue'
import { useSendVerifyCode, useUpdateData } from '../../stores/counter'

const SendVerifyCode = useSendVerifyCode()
const UpdateData = useUpdateData()


</script>
