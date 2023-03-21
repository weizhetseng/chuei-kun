<template>
  <div
    class="w-full h-full fixed top-0 left-0 bg-wrap"
    :class="{ 'opacity-0': !isShow, 'opacity-100': isShow, '-z-[1]': !isShow, 'z-[100]': isShow }"
    ref="homeModal"
  >
    <div
      class="modal inline-block w-11/12 max-w-[600px] max-h-[400px] border-y-[20px] border-Mred absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-5 overflow-scroll sm:px-12"
    >
      <h1 class="text-xl xs:text-2xl sm:text-4xl text-Mred font-bold mb-5">
        職缺請上1111人力銀行查閱
      </h1>
      <button class="absolute top-6 right-3" type="button" @click="closeModal()">
        <img class="w-5 h-5" src="../assets/image/other/close-line.png" alt="" />
      </button>
      <div class="text-base leading-loose sm:leading-loose sm:text-xl">
        <p class="text-xl sm:text-3xl text-Mred">在此聲明</p>
        <p>本公司</p>
        <p class="text-xl sm:text-3xl font-bold">垂坤食品有限公司</p>
        <p>
          <span class="text-xl sm:text-3xl text-Mred">沒有</span>在其他平台刊登網路小幫手及其他職缺
        </p>
        <p>請小心留意不實內容</p>
        <p>本公司的職缺及詳細工作內容，</p>
        <p>請上1111人力銀行查閱</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false)
const homeModal = ref(null)

//開啟 Modal 禁止背景滾動
function openModal() {
  isShow.value = true
  document.body.style.overflow = 'hidden'
}

//關閉 Modal 恢復背景滾動
function closeModal() {
  isShow.value = false
  document.body.style.overflow = 'auto'
}

defineExpose({
  openModal,
  closeModal
})
</script>
