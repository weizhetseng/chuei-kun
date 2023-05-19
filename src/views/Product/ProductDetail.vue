<template>
  <div class="flex flex-col mb-24 lg:flex-row gap-5">
    <!-- <div class="w-full mb-7 lg:mb-0 lg:w-1/2">
      <swiper :loop="true" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="[Thumbs]"
        class="w-4/5 lg:w-5/6 pb-10">
        <swiper-slide class="relative" v-for="item in productImg">
          <img class="w-full m-auto rounded-tr-2xl rounded-bl-2xl shadow-mYellow" :src="imageUrl(item.img)" />
          <div class="absolute top-2 left-0 flex flex-col gap-2">
            <span class="bg-Mred text-white p-2">人氣推薦</span>
            <span class="bg-Mred text-white p-2">人氣推薦</span>
          </div>
          <button type="button"
            class="bg-Mred absolute bottom-2 right-2 w-12 h-12 rounded-full flex items-center justify-center"
            @click="toggle(item.img)">
            <img src="../../assets/image/other/search2.png" alt="" />
          </button>
        </swiper-slide>
      </swiper>
      <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="3" :watchSlidesProgress="true"
        :modules="[Thumbs]" class="w-5/6">
        <swiper-slide v-for="item in productImg"><img class="w-full m-auto rounded-tr-2xl rounded-bl-2xl shadow-mYellow"
            :src="imageUrl(item.img)" /></swiper-slide>
      </swiper>
    </div> -->

    <div class="w-full mb-7 lg:mb-0 lg:w-1/2">
      <img :src="GetProductStore.productDetailData.ListImgUrl" alt="">
    </div>
    <div class="w-full lg:w-1/2">
      <h3 class="text-3xl font-bold mb-1">{{ GetProductStore.productDetailData.ProductName }}</h3>
      <p class="text-xl text-Mred mb-5">單價:{{ GetProductStore.productDetailData.UnitPrice_Show }}</p>
      <div class="flex items-center gap-2 mb-5 bg-Myellow rounded-tr-3xl rounded-bl-3xl">
        <p class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-4">適用優惠</p>
        <p v-for="(tag, index) in GetProductStore.productDetailData.DiscountList" :key="index">{{ tag }}</p>
      </div>
      <p class="text-xl mb-14">
        【產品特色】獨特調製法，香酥鬆脆的口感， 令人一口接著一口，難以停口的美味。
      </p>
      <btn_calculate class="mb-5" />
      <button
        class="group w-[180px] h-[60px] mb-7 block shadow-mYellow bg-Mred text-white duration-300 rounded-bl-3xl rounded-tr-3xl relativ hover:scale-110 active:scale-100"
        type="button">
        <span
          class="block relative after:content-[''] after:absolute after:block after:w-8 after:h-px after:bg-white after:top-1/2 after:right-0 before:absolute before:content-[''] before:block before:left-6 before:top-1/2 before:-translate-y-1/2 before:bg-talk before:w-4 before:h-4 before:bg-no-repeat before:bg-contain">客服聊聊</span>
      </button>
      <div class="flex flex-wrap gap-5">
        <button
          class="group w-[180px] h-[60px] block shadow-mYellow bg-Mred text-white duration-300 rounded-bl-3xl rounded-tr-3xl relativ hover:scale-110 active:scale-100"
          type="button">
          <span
            class="block relative after:content-[''] after:absolute after:block after:w-8 after:h-px after:bg-white after:top-1/2 after:right-0 before:absolute before:content-[''] before:block before:left-6 before:top-1/2 before:-translate-y-1/2 before:bg-cart before:w-4 before:h-4 before:bg-no-repeat before:bg-contain">放入購物車</span>
        </button>
        <button
          class="group w-[180px] h-[60px] block shadow-mYellow bg-Mred text-white duration-300 rounded-bl-3xl rounded-tr-3xl relativ hover:scale-110 active:scale-100"
          type="button">
          <span
            class="block relative after:content-[''] after:absolute after:block after:w-8 after:h-px after:bg-white after:top-1/2 after:right-0 before:absolute before:content-[''] before:block before:left-6 before:top-1/2 before:-translate-y-1/2 before:bg-bag before:w-4 before:h-4 before:bg-no-repeat before:bg-contain">立即購買</span>
        </button>
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/2 mb-24">
    <div class="mb-16">
      <div class="flex items-baseline gap-0.5">
        <h2 class="text-4xl text-Mred font-bold">產品規格</h2>
        <div class="flex gap-0.5 items-center">
          <div class="w-2 h-2 bg-black rotate-45"></div>
          <div class="w-2 h-2 bg-gold rotate-45"></div>
          <div class="w-2 h-2 bg-Mred rotate-45"></div>
        </div>
      </div>
      <p>feature of product</p>
    </div>
    <div v-html="GetProductStore.productDetailData.Description_HTML"></div>
  </div>

  <!-- <swiper class="recommend grid pt-32 pb-10 xs:pt-40 sm:pt-24" :slidesPerView="1" :spaceBetween="10" :navigation="true"
    :pagination="true" :breakpoints="{
      '576': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }" :modules="modules">
    <div class="absolute">
      <h2 class="text-4xl text-Mred font-bold">其他顧客也購買這些商品</h2>
      <p>Other customers also bought these items</p>
    </div>
    <swiper-slide class="relative" v-for="item in product">
      <div class="h-full pb-1">
        <div
          class="w-full min-[375px]:w-5/6 min-[414px]:w-2/3 xs:w-auto m-auto block h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-mYellow">
          <RouterLink :to="`/product/productItem/${route.params.id}/productDetail`"
            class="group block h-[200px] overflow-hidden relative after:absolute after:content-[''] after:hidden after:w-full after:h-full after:top-0 after:left-0 after:bg-white after:opacity-40 hover:after:block">
            <img :src="imageUrl(item.img)" alt="" class="h-full w-full object-cover rounded-tr-3xl rounded-bl-3xl" />
            <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block"
              src="../../assets/image/logo/logo-ck.png" alt="" />
          </RouterLink>
          <div class="p-4">
            <div class="flex flex-wrap gap-2 mb-1">
              <span class="text-white bg-Mred p-1" v-for="tag in item.tag">{{ tag }}</span>
            </div>
            <h3 class="text-xl">{{ item.title }}</h3>
            <p class="mt-3 text-lg text-right text-Mred">單價:{{ item.price }}元</p>
            <div class="mt-6 flex justify-between">
              <btn_calculate />
              <button type="button" class="bg-Mred flex items-center text-white px-2">
                <img class="w-5 h-5" src="../../assets/image/other/cart.png" alt="" />
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper> -->

  <div class="bg-wrap w-full h-full fixed top-0 left-0 z-50" v-if="lightBox">
    <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <img class="w-full" :src="imageUrl(showList)" alt="" />
      <button class="absolute -top-10 -right-10" type="button" @click="close()">
        <img src="../../assets/image/other/close-line.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import btn_calculate from '../../components/btn_calculate.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import { Navigation, Thumbs, Pagination } from 'swiper'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()

import { useGetProduct } from '../../stores/counter'

const GetProductStore = useGetProduct()

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const modules = [Navigation, Thumbs, Pagination]

const showList = ref([])
const lightBox = ref(false)


function imageUrl(name) {
  return new URL(`/src/assets/image/product/${name}`, import.meta.url).href
}
function toggle(item) {
  lightBox.value = true
  showList.value = item
  document.body.style.overflow = 'hidden'
}

function close() {
  lightBox.value = false
  showList.value = []
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  GetProductStore.getProductData(route.params.id, route.params.Pidno)
})
</script>
