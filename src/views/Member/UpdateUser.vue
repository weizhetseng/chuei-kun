<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <form action="" class="w-full xs:w-2/3 m-auto" @submit="sendData()" v-if="!sendStatus">
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name">姓名</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="name" type="text"
            placeholder="請輸入姓名" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <div class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]">性別</div>
          <div class="flex gap-5">
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="male" />
              <label for="male">男</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="sex" id="female" />
              <label for="female">女</label>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ">驗證碼</label>
          <input class="w-full outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" id="emailQ" type="text"
            placeholder="請輸入驗證碼" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" />
        </div>
        <div class="flex flex-col gap-5 mb-6 xs:flex-row">
          <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
          <div class="w-full flex flex-col xs:flex-row xs:gap-3 xs:w-[calc(100%-120px)]">
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="">
              <option value="">縣市</option>
            </select>
            <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="">
              <option value="">鄉鎮區</option>
            </select>
            <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id="">
              <option value="">街道名稱</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-5 mb-16 xs:flex-row">
          <label class="hidden xs:w-[100px] xs:block" for=""></label>
          <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text"
            placeholder="請輸入詳細地址" />
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
      <div class="mt-7" v-else>
        <p class="text-center text-3xl font-bold text-Mred mb-20">修改資料成功</p>
        <div class="text-center">
          <RouterLink to="/" class="group linkStyle">
            <span class="linkWordStyle">返回首頁</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import btn_memberList from '../../components/btn_memberList.vue'
const sendStatus = ref(false)

function sendData() {
  sendStatus.value = true
}
</script>
