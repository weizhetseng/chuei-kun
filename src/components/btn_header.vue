<template>
  <nav
    class="w-full z-40 flex items-center fixed top-0 ease-in-out duration-300"
    :class="{ 'bg-Mred': isNavFixed, 'bg-white': !isNavFixed }"
  >
    <div
      class="absolute top-1/2 left-10 -translate-y-1/2 flex items-center justify-center w-9 h-9 cursor-pointer group lg:hidden"
      @click="openAside()"
    >
      <span
        class="relative block w-8 h-0.5 before:content-[''] before:block before:absolute before:w-full before:h-full before:-top-2 before:left-0 after:content-[''] after:block after:absolute after:w-full after:h-full after:top-2 after:left-0 lg:block"
        :class="{
          'bg-white': isNavFixed,
          'before:bg-white': isNavFixed,
          'after:bg-white': isNavFixed,
          'bg-Mred': !isNavFixed,
          'before:bg-Mred': !isNavFixed,
          'after:bg-Mred': !isNavFixed
        }"
      ></span>
    </div>
    <h1 class="m-auto lg:m-0">
      <a
        class="block w-44 h-20 bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
        :class="{ 'bg-logo3': isNavFixed, 'bg-logo1': !isNavFixed }"
        href="/"
        >垂坤食品有限公司</a
      >
    </h1>
    <ul
      class="lg:flex ml-auto text-lg font-bold mr-14 gap-6 hidden"
      :class="{ 'text-black': !isNavFixed, 'text-white': isNavFixed }"
    >
      <li class="w-20 h-20 relative group">
        <RouterLink
          class="navlink"
          :class="{ 'after:bg-Mred': !isNavFixed, 'after:bg-white': isNavFixed }"
          to="/news"
          >最新消息</RouterLink
        >
        <ul
          class="hoverList flex flex-col gap-2 text-Mred bg-white absolute w-44 rounded-b-lg left-1/2 -translate-x-1/2 h-0 overflow-y-scroll duration-300 opacity-80 group-hover:h-80 group-hover:p-2"
        >
          <li>
            <RouterLink to="/news">最新消息</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">營業時間</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">食品檢驗報告</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">食品工廠登記字號</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">食品業者登記字號</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">食品責任保險單</RouterLink>
          </li>
          <li>
            <RouterLink to="/news">定型化契約</RouterLink>
          </li>
        </ul>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink"
          :class="{ 'after:bg-Mred': !isNavFixed, 'after:bg-white': isNavFixed }"
          to="/about"
          >關於垂坤
        </RouterLink>
      </li>
      <li class="w-20 h-20 relative group">
        <RouterLink
          class="navlink"
          :class="{ 'after:bg-Mred': !isNavFixed, 'after:bg-white': isNavFixed }"
          to="/product/shopMethod1"
          >線上購物
        </RouterLink>
        <ul
          class="hoverList flex flex-col gap-2 text-Mred bg-white absolute w-44 rounded-b-lg left-1/2 -translate-x-1/2 h-0 overflow-y-scroll duration-300 opacity-80 group-hover:h-80 group-hover:p-2"
        >
          <li>
            <RouterLink to="/product/productItem/1">呷卡鶴系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/2">皇啡系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/3">冷凍系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/4">冷藏系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/5">肉鬆系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/6">豬肉系列</RouterLink>
          </li>
          <li>
            <RouterLink to="/product/productItem/7">牛肉系列</RouterLink>
          </li>
        </ul>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink"
          :class="{ 'after:bg-Mred': !isNavFixed, 'after:bg-white': isNavFixed }"
          to="/location"
          >營業據點</RouterLink
        >
      </li>
      <li class="w-20 h-20">
        <a
          class="navlink"
          :class="{ 'after:bg-Mred': !isNavFixed, 'after:bg-white': isNavFixed }"
          href="#"
          >訂單下載</a
        >
      </li>
    </ul>
    <ul class="lg:flex hidden">
      <li class="navlink2 w-20 h-20 cursor-pointer" @click="scamModal.openModal()">
        <div
          class="w-full h-full p-1 bg-black text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
        >
          <img src="../assets/image/other/user-alert.png" alt="" />
          詐騙手法大公開
        </div>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink2 w-full h-full bg-gold text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
          to="/shoppingCart"
        >
          <img src="../assets/image/other/cart.png" alt="" />
          購物車
        </RouterLink>
      </li>
      <li class="w-20 h-20">
        <RouterLink
          class="navlink2 w-full h-full bg-Mred text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
          to="/login"
          ><img src="../assets/image/other/user.png" alt="" />會員專區</RouterLink
        >
      </li>
    </ul>
  </nav>
  <div
    class="bg-wrap fixed top-0 left-0 z-[41]"
    :class="{ 'w-0': !asideNav, 'w-full': asideNav, 'h-0': !asideNav, 'h-full': asideNav }"
    @click="closeAside()"
  ></div>
  <div
    class="fixed bg-white w-96 h-screen z-50 top-0 left-0 ease-in-out duration-300 p-10"
    :class="{ '-translate-x-96': !asideNav, 'translate-x-0': asideNav }"
  >
    <div class="w-full h-full flex flex-col justify-between">
      <div>
        <div class="mb-5">
          <input
            class="bg-Myellow w-full p-2 rounded-xl outline outline-gold"
            type="text"
            placeholder="關鍵字搜尋"
          />
          <label for=""></label>
        </div>
        <ul class="text-xl font-bold flex flex-col gap-5">
          <li>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleNewsDropdown()"
            >
              最新消息
              <img
                class="transition-all"
                :class="newsDropdown ? 'rotate-90' : 'rotate-0'"
                src="../assets/image/other/right.png"
                alt=""
              />
            </div>
            <ul
              class="text-base font-normal flex flex-col gap-2 my-2"
              :class="{ hidden: !newsDropdown, block: newsDropdown }"
            >
              <li>
                <RouterLink to="/news" @click="closeAside()">最新消息</RouterLink>
              </li>
              <li>
                <RouterLink to="/news" @click="closeAside()">營業時間</RouterLink>
              </li>
              <li>
                <RouterLink to="/news" @click="closeAside()">食品檢驗報告</RouterLink>
              </li>
              <li>
                <RouterLink to="/news" @click="closeAside()">食品工廠登記字號</RouterLink>
              </li>
              <li>
                <RouterLink to="/news" @click="closeAside()">食品業者登記字號</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/about" @click="closeAside()">關於垂坤</RouterLink>
          </li>
          <li>
            <div
              class="flex justify-between items-center cursor-pointer"
              @click="toggleShopDropdown()"
            >
              線上購物
              <img
                class="transition-all"
                :class="shopDropdown ? 'rotate-90' : 'rotate-0'"
                src="../assets/image/other/right.png"
                alt=""
              />
            </div>
            <ul
              class="text-base font-normal flex flex-col gap-2 my-2"
              :class="{ hidden: !shopDropdown, block: shopDropdown }"
            >
              <li>
                <RouterLink to="/product/productItem/1" @click="closeAside()"
                  >呷卡鶴系列</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/product/productItem/2" @click="closeAside()">皇啡系列</RouterLink>
              </li>
              <li>
                <RouterLink to="/product/productItem/3" @click="closeAside()">冷凍系列</RouterLink>
              </li>
              <li>
                <RouterLink to="/product/productItem/4" @click="closeAside()">冷藏系列</RouterLink>
              </li>
              <li>
                <RouterLink to="/product/productItem/5" @click="closeAside()">肉鬆系列</RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/location" @click="closeAside()">營業據點</RouterLink>
          </li>
          <li>
            <a href="#" @click="closeAside()">訂單下載</a>
          </li>
        </ul>
      </div>
      <ul class="text-xl font-bold text-white flex flex-col gap-5">
        <li @click="scamModal.openModal()">
          <div class="bg-black rounded-xl p-3 flex items-center gap-5" @click="closeAside()">
            <img src="../assets/image/other/user-alert.png" alt="" />
            詐騙手法大公開
          </div>
        </li>
        <li>
          <RouterLink
            class="bg-gold rounded-xl p-3 flex items-center gap-5"
            to="/shoppingCart"
            @click="closeAside()"
          >
            <img src="../assets/image/other/cart.png" alt="" />
            購物車
          </RouterLink>
        </li>
        <li>
          <RouterLink
            class="bg-Mred rounded-xl p-3 flex items-center gap-5"
            to="/login"
            @click="closeAside()"
          >
            <img src="../assets/image/other/user.png" alt="" />
            會員專區
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>

  <btn_scamModal ref="scamModal" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import btn_scamModal from './btn_scamModal.vue'

const isNavFixed = ref(false)
const scamModal = ref(null)
const asideNav = ref(false)
const newsDropdown = ref(false)
const shopDropdown = ref(false)

function openAside() {
  asideNav.value = true
  document.body.style.overflow = 'hidden'
}
function closeAside() {
  asideNav.value = false
  document.body.style.overflow = 'auto'
}
function toggleNewsDropdown() {
  newsDropdown.value = !newsDropdown.value
  shopDropdown.value = false
}
function toggleShopDropdown() {
  shopDropdown.value = !shopDropdown.value
  newsDropdown.value = false
}
function scrollTop() {
  const scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop > 80) {
    isNavFixed.value = true
  } else {
    isNavFixed.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollTop)
})
</script>
