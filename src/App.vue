<template>
  <btn_header />
  <RouterView />
  <btn_footer />
  <btn_goTop />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import btn_header from './components/btn_header.vue'
import btn_footer from './components/btn_footer.vue'
import btn_goTop from './components/btn_goTop.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init()
})
</script>
