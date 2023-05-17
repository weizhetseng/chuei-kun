<template>
  <nav class="w-full z-40 flex items-center fixed top-0 ease-in-out duration-300"
    :class="{ 'bg-Mred': navBar.isNavFixed, 'bg-white': !navBar.isNavFixed }">
    <div
      class="absolute top-1/2 left-10 -translate-y-1/2 flex items-center justify-center w-9 h-9 cursor-pointer group lg:hidden"
      @click="navBar.openAside()">
      <span
        class="relative block w-8 h-0.5 before:content-[''] before:block before:absolute before:w-full before:h-full before:-top-2 before:left-0 after:content-[''] after:block after:absolute after:w-full after:h-full after:top-2 after:left-0 lg:block"
        :class="{
          'bg-white': navBar.isNavFixed,
          'before:bg-white': navBar.isNavFixed,
          'after:bg-white': navBar.isNavFixed,
          'bg-Mred': !navBar.isNavFixed,
          'before:bg-Mred': !navBar.isNavFixed,
          'after:bg-Mred': !navBar.isNavFixed
        }"></span>
    </div>
    <h1 class="m-auto lg:m-0">
      <a class="block w-44 h-20 bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
        :class="{ 'bg-logo3': navBar.isNavFixed, 'bg-logo1': !navBar.isNavFixed }" href="/">垂坤食品有限公司</a>
    </h1>
    <ul class="lg:flex ml-auto text-lg font-bold mr-14 gap-6 hidden"
      :class="{ 'text-black': !navBar.isNavFixed, 'text-white': navBar.isNavFixed }">
      <li class="w-20 h-20 relative group">
        <RouterLink class="navlink" :class="{ 'after:bg-Mred': !navBar.isNavFixed, 'after:bg-white': navBar.isNavFixed }"
          to="/news">
          最新消息</RouterLink>
        <ul
          class="hoverList flex flex-col gap-2 text-Mred bg-white absolute w-44 rounded-b-lg left-1/2 -translate-x-1/2 h-0 overflow-y-scroll duration-300 opacity-80 group-hover:h-80 group-hover:p-2">
          <li v-for="list in NewsClassStore.newsList" :key="list.Id">
            <RouterLink class="sub_Link" :to="`/news/${list.Id}`" @click="NewsClassStore.getNewsData(list.Id)">
              {{ list.Title }}
            </RouterLink>
          </li>
        </ul>
      </li>
      <li class="w-20 h-20">
        <RouterLink class="navlink" :class="{ 'after:bg-Mred': !navBar.isNavFixed, 'after:bg-white': navBar.isNavFixed }"
          to="/about">
          關於垂坤
        </RouterLink>
      </li>
      <li class="w-20 h-20 relative group">
        <RouterLink class="navlink" :class="{ 'after:bg-Mred': !navBar.isNavFixed, 'after:bg-white': navBar.isNavFixed }"
          to="/product/shopMethod1">線上購物
        </RouterLink>
        <ul
          class="hoverList flex flex-col gap-2 text-Mred bg-white absolute w-44 rounded-b-lg left-1/2 -translate-x-1/2 h-0 overflow-y-scroll duration-300 opacity-80 group-hover:h-80 group-hover:p-2">
          <li v-for="list in GetProductStore.productList" :key="list.Id">
            <RouterLink :to="`/product/productItem/${list.Id}`">{{ list.Title }}</RouterLink>
          </li>
        </ul>
      </li>
      <li class="w-20 h-20">
        <RouterLink class="navlink" :class="{ 'after:bg-Mred': !navBar.isNavFixed, 'after:bg-white': navBar.isNavFixed }"
          to="/location">營業據點</RouterLink>
      </li>
      <li class="w-20 h-20">
        <a class="navlink" :class="{ 'after:bg-Mred': !navBar.isNavFixed, 'after:bg-white': navBar.isNavFixed }"
          href="#">訂單下載</a>
      </li>
    </ul>
    <ul class="lg:flex hidden">
      <li class="navlink2 w-20 h-20 cursor-pointer" @click="scamModal.openModal()">
        <div
          class="w-full h-full p-1 bg-black text-white flex flex-col gap-1 items-center justify-center text-center leading-none">
          <img src="../assets/image/other/user-alert.png" alt="" />
          詐騙手法大公開
        </div>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink2 w-full h-full bg-gold text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
          to="/shoppingCart">
          <img src="../assets/image/other/cart.png" alt="" />
          購物車
        </RouterLink>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink2 w-full h-full bg-Mred text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
          :to="webLogin.loginStatus ? '/memberCenter' : '/login'"><img src="../assets/image/other/user.png" alt="" />會員專區
        </RouterLink>
      </li>
    </ul>
  </nav>
  <btn_mobileNav />
  <btn_scamModal ref="scamModal" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import btn_scamModal from './btn_scamModal.vue'
import btn_mobileNav from './btn_mobileNav.vue';
import { useNavBar, useWebLogin, useGetNewsClass, useGetProduct } from '../stores/counter';

const NewsClassStore = useGetNewsClass()
const GetProductStore = useGetProduct()
const navBar = useNavBar()
const webLogin = useWebLogin()
const scamModal = ref(null)


onMounted(() => {
  window.addEventListener('scroll', navBar.scrollTop)
})
</script>