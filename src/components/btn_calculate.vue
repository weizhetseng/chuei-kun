<template>
  <div class="flex">
    <div class="bg-black flex items-center justify-center w-7 h-7 text-white cursor-pointer" @click="minus()">
      -
    </div>
    <div class="flex items-center justify-center border-y px-[10%] h-7">{{ num }}</div>
    <div class="bg-Mred flex items-center justify-center w-7 h-7 text-white cursor-pointer" @click="add()">
      +
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)

function add() {
  num.value++
}
function minus() {
  num.value--
  if (num.value < 0) {
    num.value = 0
    alert('數量不可小於0')
  }
}
</script>
