<template>
  <footer class="bg-Mred">
    <div
      class="container flex flex-col items-center gap-5 py-10 lg:flex lg:flex-row lg:items-baseline lg:justify-evenly lg:py-20">
      <RouterLink
        class="block w-44 h-16 bg-logo2 bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
        to="/">
        垂坤食品有限公司
      </RouterLink>
      <ul class="grid grid-cols-3 gap-4">
        <li v-for="item in pageLink" :key="item.title">
          <RouterLink class="text-white" :to="item.url">{{ item.title }}</RouterLink>
        </li>
      </ul>
      <ul class="text-white">
        <li class="flex mb-4">
          <p>客服專線:</p>
          <a href="tel:037-867840">037-867840</a>
        </li>
        <li class="flex">
          <p>客服時間:</p>
          <div>
            <p>周一至周五08:00~21:00</p>
            <p>周六08:00~18:00</p>
          </div>
        </li>
      </ul>
    </div>
    <p class="text-center bg-Myellow p-5 text-lg">垂坤食品有限公司 © {{ newYear.getFullYear() }} All Rights Reserved.</p>
  </footer>
</template>

<script setup>

const pageLink = [
  {
    url: '/news',
    title: '最新消息'
  },
  {
    url: '/about',
    title: '關於垂坤'
  },
  {
    url: '/location',
    title: '營業據點'
  },
  {
    url: '',
    title: '會員專區'
  },
  {
    url: '',
    title: '線上購物'
  },
  {
    url: '',
    title: '訂單下載'
  }
]
const newYear = new Date();
</script>
