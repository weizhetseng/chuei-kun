<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <Form v-slot="{ errors }" class="w-full xs:w-2/3 m-auto" action="" @submit="changePW()" v-if="!changeStatus">
        <div class="flex flex-col gap-5 mb-7 relative xs:flex-row">
          <label class="w-full text-lg xs:text-right p-1 xs:border-r xs:border-gray xs:w-[120px]" for="opw"><span
              class="text-Wred">*</span>舊密碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-140px)]" id="oldPW" name="oldPW"
            type="text" label="舊密碼" :class="{ 'is-invalid': errors['oldPW'] }" placeholder="請輸入舊密碼" rules="required">
          </Field>
          <error-message name="oldPW" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 relative xs:flex-row">
          <label class="w-full text-lg xs:text-right p-1 xs:border-r xs:border-gray xs:w-[120px]" for="npw"><span
              class="text-Wred">*</span>新密碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-140px)]" id="newPW1" name="newPW1"
            type="password" label="新密碼" :class="{ 'is-invalid': errors['newPW1'] }" placeholder="請輸入新密碼" rules="required">
          </Field>
          <error-message name="newPW1" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex flex-col gap-5 mb-7 relative xs:flex-row">
          <label class="w-full text-lg xs:text-right p-1 xs:border-r xs:border-gray xs:w-[120px]" for="npw2"><span
              class="text-Wred">*</span>確認新密碼</label>
          <Field class="w-full outline-none border-b border-lgray xs:w-[calc(100%-140px)]" id="newPW2" name="newPW2"
            type="password" label="確認新密碼" :class="{ 'is-invalid': errors['newPW2'] }" placeholder="請再輸入一次新密碼"
            rules="required">
          </Field>
          <error-message name="newPW2" class="block absolute right-0 -bottom-6 text-red-700 text-right"></error-message>
        </div>
        <div class="flex justify-center items-center gap-5 mt-16">
          <button class="buttonStyle2 group" type="reset">
            <span class="btnWordStyle2">清除</span>
          </button>
          <button class="buttonStyle group" type="submit">
            <span class="btnWordStyle">送出</span>
          </button>
        </div>
      </Form>
      <div class="mt-7" v-if="changeStatus">
        <p class="text-center text-3xl font-bold text-Mred mb-20">修改密碼成功</p>
        <button class="buttonStyle group" type="button" @click="goBack.goBackBtn()">
          <span class="btnWordStyle">返回上一頁</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import btn_memberList from '../../components/btn_memberList.vue'
import { useGoBack } from '../../stores/counter';
const goBack = useGoBack()

const changeStatus = ref(false)
function changePW() {
  changeStatus.value = true
}
</script>
