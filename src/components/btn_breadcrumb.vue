<template>
  <ul class="flex justify-end items-center gap-10">
    <li
      class="relative after:content-[''] after:absolute after:top-1/2 after:-right-7 after:bg-contain after:bg-no-repeat after:-translate-y-1/2 after:bg-bread after:w-3 after:h-5"
    >
      <RouterLink to="/"><img src="../assets/image/other/home.png" alt="" /></RouterLink>
    </li>
    <li
      class="text-xl text-Mred relative after:content-[''] after:absolute after:top-1/2 after:-right-7 after:bg-contain after:bg-no-repeat after:-translate-y-1/2 after:bg-bread after:w-3 after:h-5 last:after:hidden"
      v-for="item in route.meta.breadcrumb"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
