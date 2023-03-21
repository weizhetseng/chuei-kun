<template>
  <div>
    <img class="w-full mb-12" :src="imageUrl(route.meta.banner)" alt="" />
    <div class="container flex flex-col items-center lg:flex-row">
      <div class="mb-3 flex lg:mb-0 lg:w-1/6">
        <img src="../assets/image/other/alert.png" alt="" />
        <img src="../assets/image/other/alert.png" alt="" />
        <img src="../assets/image/other/alert.png" alt="" />
      </div>
      <p class="lg:w-5/6 text-xl text-Mred font-bold">
        請注意！本公司人員不會主動致電要求您前往ATM解除任何設定、不會有簽錯簽單，重複訂購之事由，一定是詐騙，請立即掛斷或撥打165反詐騙專線。
        相關反詐騙訊息可至165官網查詢：<a
          class="text-Mred"
          target="_blank"
          href="https://165.npa.gov.tw/"
          >https://165.npa.gov.tw/</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function imageUrl(name) {
  return new URL(`/src/assets/image/banner/v1/${name}`, import.meta.url).href
}
</script>
