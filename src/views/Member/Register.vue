<template>
  <btn_banner />
  <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
    <div class="container">
      <btn_breadcrumb />
      <div class="titleStyle mb-9">
        <h2 class="text-4xl text-Mred font-bold">會員註冊</h2>
        <p>Sign Up</p>
      </div>
      <Form v-slot="{ errors }" action="" class="m-auto mb-20 sm:w-4/5 lg:w-3/5">
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
            type="button" @click="codeSend.phoneSendCode()" :disabled="codeSend.phoneCountdown !== 0">
            {{ codeSend.phoneCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${codeSend.phoneCountdown})` }}
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
            type="text" label="電子信箱" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入Email" rules="required"
            v-model="Register.NewUser.Email">
          </Field>
          <error-message name="email" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
          <button
            class="absolute bg-Mred text-white py-[2px] px-5 right-0 bottom-2 rounded-tr-3xl rounded-bl-3xl shadow-mYellow"
            type="button" @click="codeSend.emailSendCode()" :disabled="codeSend.emailCountdown !== 0">
            {{ codeSend.emailCountdown === 0 ? '發送驗證碼' : `重發驗證碼(${codeSend.emailCountdown})` }}
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
            type="text" label="密碼" :class="{ 'is-invalid': errors['password1'] }"
            placeholder="請輸入4~12 個字元，請勿使用空白或「＠ 」等特殊符號" rules="required" v-model="Register.NewUser.Password">
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
            type="text" label="姓名" :class="{ 'is-invalid': errors['userName'] }" placeholder="請輸入姓名" rules="required">
          </Field>
          <error-message name="userName" class="block absolute right-0 -bottom-6 text-red-700"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <div class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]">
            性別
          </div>
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
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
          <input
            class="myDate dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
            id="date" type="date" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="email2" type="text"
            placeholder="請輸入電子信箱" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
          <input class="w-full outline-none border-b border-lgray xs:w-[calc(100%-120px)]" id="hphone" type="text"
            placeholder="請輸入市話號碼" />
        </div>
        <div class="flex flex-col gap-5 mb-7 xs:flex-row">
          <label class="w-full text-lg font-bold p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
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
      </Form>
    </div>
  </div>
</template>
<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import { useCodeSend, useRegister } from '../../stores/counter.js'
const codeSend = useCodeSend()
const Register = useRegister()


</script>
