<template>
  <btn_banner />
  <btn_animateBG />

  <div class="container my-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">線上購物</h2>
      <p>Promotional Items</p>
    </div>
    <div class="flex gap-5">
      <div class="hidden w-1/5 xl:block">
        <btn_productList />
      </div>
      <div class="w-full xl:w-4/5">
        <ul
          class="w-full xl:w-4/5 m-auto flex flex-col items-center justify-center text-2xl font-bold gap-5 mb-10 sm:flex-row"
          v-if="['shopMethod1', 'shopMethod2', 'shopMethod3'].includes(route.path.split('/')[2])"
        >
          <li
            class="group w-2/3 sm:w-1/3 text-center p-3 relative before:absolute before:transition-all before:block before:content-[''] before:w-0 before:h-full before:bg-Mred before:top-0 before:left-0 after:absolute after:block after:content-[''] after:w-full after:h-full after:top-1 after:left-1 after:bg-Myellow after:-z-10 hover:shadow-main hover:before:w-full"
            :class="{ 'bg-Mred': item.url === route.path, 'bg-white': item.url !== route.path }"
            v-for="item in shopMethodLink"
            :key="item.title"
          >
            <RouterLink
              class="relative block after:absolute after:block after:w-5 after:h-5 after:content-[''] after:top-1/2 after:-translate-y-1/2 after:right-2 after:bg-no-repeat after:bg-center after:bg-cover group-hover:text-white group-hover:after:bg-rightW"
              :class="{
                'text-Mred': item.url !== route.path,
                'text-white': item.url === route.path,
                'after:bg-right': item.url !== route.path,
                'after:bg-rightW': item.url === route.path
              }"
              :to="item.url"
            >
              {{ item.title }}
            </RouterLink>
          </li>
        </ul>

        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_productList from '../../components/btn_productList.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'

const route = useRoute()
const shopMethodLink = [
  {
    url: '/product/shopMethod1',
    title: '訂購方式'
  },
  {
    url: '/product/shopMethod2',
    title: '付款方式'
  },
  {
    url: '/product/shopMethod3',
    title: '訂購須知'
  }
]
</script>
