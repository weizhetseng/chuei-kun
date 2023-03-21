<template>
  <div class="w-full xl:w-4/5 m-auto mb-12">
    <ul class="flex xs:gap-5 text-lg font-bold">
      <li class="w-1/3 flex flex-col items-center py-10">
        <p class="mb-10">網路訂購</p>
        <img src="../../assets/image/other/computer-line.png" alt="" />
      </li>
      <li class="w-1/3 flex flex-col items-center py-10 border-x border-wrap">
        <p class="mb-10">電話訂購</p>
        <img src="../../assets/image/other/telephone-fill.png" alt="" />
      </li>
      <li class="w-1/3 flex flex-col items-center py-10">
        <p class="mb-10">我要開團</p>
        <img src="../../assets/image/other/people-group-solid.png" alt="" />
      </li>
    </ul>
  </div>
  <div class="mb-12">
    <div class="flex items-baseline gap-0.5">
      <h2 class="text-4xl text-Mred font-bold">熱門系列</h2>
      <div class="flex gap-0.5 items-center">
        <div class="w-2 h-2 bg-black rotate-45"></div>
        <div class="w-2 h-2 bg-gold rotate-45"></div>
        <div class="w-2 h-2 bg-Mred rotate-45"></div>
      </div>
    </div>
    <p>Hot series</p>
  </div>
  <div data-aos="fade-up">
    <ul
      class="w-full min-w-0 flex flex-col h-[700px] items-stretch md:flex-row md:min-w-[600px] md:h-[400px]"
    >
      <li
        class="bg-no-repeat bg-cover bg-center cursor-pointer transition-all min-w-[100px] relative min-h-[90px] md:min-h-0 after:w-full after:h-full after:absolute after:content-[''] after:block after:bg-wrap after:top-0 after:left-0 after:z-[1]"
        :class="{
          'flex-grow-[10000]': activeClass === index,
          'after:hidden': activeClass === index
        }"
        v-for="(item, index) in hots"
        :key="index"
        :style="{
          'background-image': `url(${imageUrl(item.url)})`
        }"
        @click="openImg(index)"
      >
        <div class="absolute bottom-0 p-2 text-white" :class="{ hidden: activeClass !== index }">
          <img src="../../assets/image/product/logotag.png" alt="" />
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <div
          class="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center text-white md:flex-col md:left-0 md:-translate-x-0"
          :class="{ hidden: activeClass === index }"
        >
          <img src="../../assets/image/product/logotag.png" alt="" />
          <h3 class="w-24 whitespace-nowrap md:w-auto">{{ item.title }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeClass = ref(0)

const hots = [
  {
    url: 'product01.jpg',
    title: '肉鬆系列',
    text: '純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。'
  },
  {
    url: 'product04.jpg',
    title: '豬肉系列',
    text: '純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。'
  },
  {
    url: 'product05.jpg',
    title: '魚製品系列',
    text: '純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。'
  },
  {
    url: 'product06.jpg',
    title: '休閒食品系列',
    text: '純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。'
  },
  {
    url: 'product07.jpg',
    title: '餅乾系列',
    text: '純熟的古法手工烘焙，香酥鮮脆，獨特醬料調製入味，絲絲鬆軟酥脆的口感，入喉後餘留的甘甜滋味，令人難以停口。'
  }
]

function openImg(item) {
  activeClass.value = item
}
function imageUrl(name) {
  return new URL(`/src/assets/image/expandCard/${name}`, import.meta.url).href
}
</script>
