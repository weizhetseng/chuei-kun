<template>
  <ul class="flex justify-center items-center gap-4 sm:gap-7">
    <li class="cursor-pointer hover:scale-110 active:scale-100" @click="prevPage()">
      <div><img src="../assets/image/other/pageleft.png" alt="" /></div>
    </li>
    <li class="cursor-pointer" @click="currentChange(item)" v-for="item in totalPage">
      <div
        class="border border-Mred rounded-full text-Mred flex items-center justify-center hover:scale-110 hover:bg-Mred hover:text-white active:scale-100 w-10 h-10 sm:w-12 sm:h-12">
        0{{ item }}</div>
    </li>
    <li class="cursor-pointer hover:scale-110 active:scale-100" @click="nextPage">
      <div><img src="../assets/image/other/pageright.png" alt="" /></div>
    </li>
  </ul>
</template>

<script setup>

defineProps({
  prevPage: {
    type: Function,
    required: true
  },
  currentChange: {
    type: Function,
    required: true
  },
  nextPage: {
    type: Function,
    required: true
  },
  totalPage: {
    type: Number,
    required: true
  }
})
</script>
