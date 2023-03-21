<template>
  <div class="w-full xl:w-4/5 m-auto border-b border-wrap mb-16 pb-16">
    <h4 class="text-xl font-bold mb-4">付款方式</h4>
    <div class="text-lg leading-loose">
      <p>貨到付款 <span class="text-xl font-bold text-Mred">(免手續費)</span></p>
      <p>匯款 (須於到貨日前2-3天的15點前完成)，(不含例假日)</p>
      <p>銀行代碼: OOO</p>
      <p>銀行帳號: OOOOOOOOOOOOO</p>
      <p>收款人: XXX</p>
    </div>
  </div>
  <button class="buttonStyle group" type="button" @click="goBack()">
    <span class="btnWordStyle">返回上一頁</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.back()
}
</script>
