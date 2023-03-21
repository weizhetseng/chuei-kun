<template>
  <div
    class="w-full h-full fixed top-0 left-0 transition-all bg-wrap"
    :class="{ 'opacity-0': !isShow, 'opacity-100': isShow, '-z-[1]': !isShow, 'z-[100]': isShow }"
    ref="scamModal"
  >
    <div
      class="modal inline-block w-11/12 max-w-[600px] border-y-[20px] border-Mred absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-5 sm:px-12"
    >
      <h1 class="text-xl xs:text-2xl sm:text-4xl text-Mred font-bold mb-5">詐騙手法大公開</h1>
      <button class="absolute top-6 right-3" type="button" @click="closeModal()">
        <img class="w-5 h-5" src="../assets/image/other/close-line.png" alt="" />
      </button>
      <div class="text-base xs:leading-loose sm:text-xl">
        <p>常見的詐騙話術：疏失設定成批發商、簽單簽錯</p>
        <p>疏失升級為ＶＩＰ、疏失設定為分期付款將被連續扣款，</p>
        <p>如不需要者，要去ＡＴＭ解除設定才不會被扣款。</p>
        <p>本公司全面採「貨到付款」，</p>
        <p>不會主動要求客人操作ＡＴＭ解除設定或匯款</p>
        <p>近日詐騙案件盛行，詐騙集團會以任何名義要求您</p>
        <p>去ATM進行匯款動作，提醒您接到開頭為+886國際電話</p>
        <p>千萬不要上當，若有上列情事，請記下來電話號碼，</p>
        <p>並撥打反詐騙電話專線165報案。</p>
        <p>～～～垂坤不會主動致電給客人要求匯款，</p>
        <p>因垂坤貨品全面採貨到付款。</p>
        <p>～～～不會主動要求客人操作ＡＴＭ解除設定或匯款</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false)
const scamModal = ref(null)

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
