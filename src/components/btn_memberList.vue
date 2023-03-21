<template>
  <ul>
    <li class="mb-3" v-for="item in memberLink" :key="item.url">
      <RouterLink
        class="block text-xl relative before:absolute before:content-[''] before:block before:w-3 before:h-3 before:bg-Mred before:rotate-45 before:top-1/2 before:right-12 before:-translate-y-1/2 before:transition-all after:absolute after:content-[''] after:block after:w-12 after:h-px after:bg-Mred after:top-1/2 after:right-0 after:-translate-y-1/2 after:transition-all hover:text-Mred hover:before:right-9 hover:after:w-9"
        :class="{
          'text-Mred':
            route.path === item.url ||
            (route.path.startsWith('/memberCenter/orderDetail/') &&
              item.url === '/memberCenter/orderSearch'),
          'before:right-9':
            route.path === item.url ||
            ($route.path.startsWith('/memberCenter/orderDetail/') &&
              item.url === '/memberCenter/orderSearch'),
          'after:w-9':
            route.path === item.url ||
            ($route.path.startsWith('/memberCenter/orderDetail/') &&
              item.url === '/memberCenter/orderSearch')
        }"
        :to="item.url"
        >{{ item.title }}</RouterLink
      >
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const memberLink = [
  {
    title: '查詢訂單資料',
    url: '/memberCenter/orderSearch'
  },
  {
    title: '修改會員資料',
    url: '/memberCenter/updateUser'
  },
  {
    title: '變更密碼',
    url: '/memberCenter/changePW'
  },
  {
    title: '綁定其他帳號',
    url: '/memberCenter/bindOther'
  },
  {
    title: '登出',
    url: '/memberCenter/logout'
  }
]
</script>
