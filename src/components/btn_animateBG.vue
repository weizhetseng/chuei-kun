<template>
  <div class="absolute w-full py-[100px] overflow-hidden -z-10">
    <div class="absolute inset-0 transition-all bg-bgword bg-no-repeat"
      :style="{ backgroundPositionX: `${layer1Offset}px` }"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const layer1Offset = ref(0)

const updateParallaxLayers = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  layer1Offset.value = -(scrollTop * 0.2)
}

onMounted(() => {
  window.addEventListener('scroll', updateParallaxLayers)
})

//移除事件綁定
onUnmounted(() => {
  window.removeEventListener('scroll', updateParallaxLayers)
})
</script>
