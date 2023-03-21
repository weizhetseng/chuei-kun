<template>
  <div
    class="fixed bottom-32 z-[99] right-8 cursor-pointer transition-all hover:scale-110 active:scale-100"
    :class="{ 'opacity-0': !isShow, 'opacity-100': isShow }"
    @click="goTop()"
  >
    <img class="w-20 h-20 opacity-70" src="../assets/image/other/goTop.png" alt="" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const isShow = ref(false)

//判斷是否顯示按鈕
function isTop() {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 200) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}

//回到上層
function goTop() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

  function animate() {
    scrollTop -= 30
    if (scrollTop > 0) {
      window.scrollTo(0, scrollTop)
      window.requestAnimationFrame(animate)
    } else {
      window.scrollTo(0, 0)
    }
  }
  window.requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('scroll', isTop)
})
</script>
