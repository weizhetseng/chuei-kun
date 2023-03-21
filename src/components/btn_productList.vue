<template>
  <div>
    <div class="relative bg-Mred mb-10 p-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow">
      <input
        class="w-[calc(100%-48px)] bg-transparent outline-none border-b border-white placeholder:text-white"
        id="searchProduct"
        name="searchProduct"
        type="text"
        placeholder="關鍵字搜尋"
      />
      <label
        class="absolute w-12 h-full bg-white rounded-tr-3xl rounded-bl-3xl top-0 right-0 flex items-center justify-center"
        for="searchProduct"
      >
        <img src="../assets/image/other/search.png" alt="" />
      </label>
    </div>
    <ul>
      <li
        class="mb-3"
        v-for="item in productList"
        :key="item.url"
        :class="{ active: item.url === route.path }"
      >
        <RouterLink
          class="block text-xl relative before:absolute before:content-[''] before:block before:w-3 before:h-3 before:bg-Mred before:rotate-45 before:top-1/2 before:right-12 before:-translate-y-1/2 before:transition-all after:absolute after:content-[''] after:block after:w-12 after:h-px after:bg-Mred after:top-1/2 after:right-0 after:-translate-y-1/2 after:transition-all hover:text-Mred hover:before:right-9 hover:after:w-9"
          :class="{
            'text-Mred': route.path === item.url,
            'before:right-9': route.path === item.url,
            'after:w-9': route.path === item.url
          }"
          :to="item.url"
          >{{ item.title }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const productList = [
  {
    title: '呷卡鶴系列',
    url: '/product/productItem/1'
  },
  {
    title: '皇啡系列',
    url: '/product/productItem/2'
  },
  {
    title: '冷凍系列',
    url: '/product/productItem/3'
  },
  {
    title: '冷藏系列',
    url: '/product/productItem/4'
  },
  {
    title: '肉鬆系列',
    url: '/product/productItem/5'
  },
  {
    title: '豬肉系列',
    url: '/product/productItem/6'
  },
  {
    title: '牛肉系列',
    url: '/product/productItem/7'
  },
  {
    title: '堅果系列',
    url: '/product/productItem/8'
  },
  {
    title: '魚製品系列',
    url: '/product/productItem/9'
  },
  {
    title: '蜜餞系列',
    url: '/product/productItem/10'
  },
  {
    title: '休閒食品系列',
    url: '/product/productItem/11'
  },
  {
    title: '豆干系列',
    url: '/product/productItem/12'
  },
  {
    title: '穀物系列',
    url: '/product/productItem/13'
  },
  {
    title: '沖泡系列',
    url: '/product/productItem/14'
  },
  {
    title: '餅乾系列',
    url: '/product/productItem/15'
  },
  {
    title: '禮盒系列',
    url: '/product/productItem/16'
  },
  {
    title: '紙袋+塑膠袋加購',
    url: '/product/productItem/17'
  }
]
</script>
