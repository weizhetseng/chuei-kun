<template>
  <link rel="preload" :href="imageUrl2(item)" as="image" v-for="item in banner" :key="item" />
  <div class="mt-20">
    <swiper class="mb-5 lg:mb-10" :modules="modules" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :effect="'fade'">
      <swiper-slide v-for="item in banner" :key="item">
        <div class="flex">
          <div class="w-1/12 hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-3">
            <p class="text-Mred text-xs" style="writing-mode: vertical-lr">FOLLOW US</p>
            <a href="#" aria-label="Instagram">
              <img src="../../assets/image/other/homeIg.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="../../assets/image/other/homeFacebook.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Line">
              <img src="../../assets/image/other/homeLine.png" alt="Line" />
            </a>
            <div class="w-px h-1/6 bg-Mred"></div>
          </div>
          <img class="w-full sm:w-11/12 sm:rounded-bl-[30px]" :src="imageUrl2(item)" alt="" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="container flex flex-col items-center lg:flex-row">
      <div class="mb-3 flex lg:mb-0 lg:w-1/6">
        <img src="../../assets/image/other/alert.png" alt="" />
        <img src="../../assets/image/other/alert.png" alt="" />
        <img src="../../assets/image/other/alert.png" alt="" />
      </div>
      <p class="lg:w-5/6 text-xl text-Mred font-bold">
        請注意！本公司人員不會主動致電要求您前往ATM解除任何設定、不會有簽錯簽單，重複訂購之事由，一定是詐騙，請立即掛斷或撥打165反詐騙專線。
        相關反詐騙訊息可至165官網查詢：<a class="text-Mred" target="_blank" href="https://165.npa.gov.tw/">https://165.npa.gov.tw/</a>
      </p>
    </div>
  </div>
  <btn_animateBG />
  <div
    class="flex flex-col items-center gap-5 container mb-28 mt-40 lg:overflow-hidden lg:flex-row lg:container lg:max-w-none lg:px-0">
    <div class="w-full lg:w-1/2 lg:pl-[5%] xl:pl-[10%]" data-aos="fade-right">
      <div class="titleStyle">
        <h2 class="text-4xl text-Mred font-bold">最新消息</h2>
        <p>Hot news</p>
      </div>
      <ul class="mb-5">
        <li class="flex flex-wrap gap-5 border-b border-dashed py-5" v-for="item in newsList" :key="item.title">
          <div
            class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-5 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">
            news
          </div>
          <div class="flex items-baseline justify-between flex-wrap gap-5">
            <div class="text-xl font-bold">{{ item.title }}</div>
            <div class="text-sm">{{ item.date }}</div>
          </div>
        </li>
      </ul>
      <RouterLink to="/news" class="group linkStyle !m-0 !ml-auto">
        <span class="linkWordStyle">了解更多</span>
      </RouterLink>
    </div>
    <div class="w-full lg:w-1/2" data-aos="fade-left">
      <img class="w-full" src="../../assets/image/other/hotNews.png" alt="" />
    </div>
  </div>
  <div class="container mb-20" data-aos="fade-up">
    <div class="mb-10 flex flex-col items-start gap-5 2xl:gap-20 2xl:justify-between 2xl:flex-row">
      <div class="titleStyle mb-5 xl:mb-0">
        <h2 class="text-4xl text-Mred font-bold">推薦商品</h2>
        <p class="whitespace-nowrap">Recommended products</p>
      </div>
      <ul class="modal w-full flex items-center self-center p-2 gap-5 overflow-scroll whitespace-nowrap">
        <li v-for="(item, index) in recommendSeries" :key="item">
          <button class="buttonStyle2 group" type="button" @click="changeSeries(index)">
            <span class="btnWordStyle2">{{ item }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="relative px-5 xs:px-14 lg:px-24 2xl:px-40" data-aos="fade-up">
    <swiper class="hrecommend max-w-[1536px] grid pb-14" :slidesPerView="1" :spaceBetween="10" :navigation="true"
      :scrollbar="{ hide: true }" :breakpoints="{
        '576': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '990': {
          slidesPerView: 3,
          spaceBetween: 20
        },
        '1200': {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }" :modules="modules">
      <swiper-slide class="relative" v-for="item in recommendProduct" :key="item.title">
        <div class="h-full pb-1">
          <div
            class="w-full min-[375px]:w-5/6 min-[414px]:w-2/3 xs:w-auto m-auto block h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-mYellow">
            <RouterLink :to="`/product/productItem/${route.params.id}/productDetail`"
              class="group block h-[200px] overflow-hidden relative after:absolute after:content-[''] after:hidden after:w-full after:h-full after:top-0 after:left-0 after:bg-white after:opacity-40 hover:after:block"
              aria-label="product">
              <img :src="imageUrl(item.imgUrl)" alt="" class="h-full w-full object-cover rounded-tr-3xl rounded-bl-3xl" />
              <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block"
                src="../../assets/image/logo/logo-ck.png" alt="" />
            </RouterLink>
            <div class="p-4">
              <div class="flex flex-wrap gap-2 mb-1">
                <span class="text-white bg-Mred p-1" v-for="tag in item.tag" :key="tag">{{ tag }}</span>
              </div>
              <h3 class="text-xl">{{ item.title }}</h3>
              <p class="mt-3 text-lg text-right text-Mred">單價:{{ item.cost }}元</p>
              <div class="mt-2 flex justify-between">
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
    </swiper>
  </div>

  <btn_homeModal ref="homeModal" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import btn_homeModal from '../../components/btn_homeModal.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'
import btn_calculate from '../../components/btn_calculate.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { Autoplay, Navigation, Scrollbar, EffectFade } from 'swiper'
import { useRoute } from 'vue-router'

// import { apiHomeProductList } from '../../api/api'


const modules = [Autoplay, Navigation, Scrollbar, EffectFade];
const homeModal = ref(null);
const route = useRoute();

const banner = ['banner-home1.jpg', 'banner-home2.jpg'];

const newsList = [
  {
    title: '即日起至7/20,皇啡咖啡任兩包免運活動開跑~',
    date: '2022-06-20'
  },
  {
    title: '即日起至7/20,皇啡咖啡任兩包免運活動開跑~',
    date: '2022-06-20'
  },
  {
    title: '即日起至7/20,皇啡咖啡任兩包免運活動開跑~',
    date: '2022-06-20'
  }
];

const recommendProduct = [
  {
    imgUrl: 'product01.jpg',
    tag: ['人氣推薦', '門市限定'],
    title: '[新品]肉鬆小脆餅',
    cost: '150'
  },
  {
    imgUrl: 'product02.png',
    tag: ['人氣推薦', '門市限定', '人氣推薦', '門市限定'],
    title: '[新品]肉鬆小脆餅肉鬆小脆餅',
    cost: '150'
  },
  {
    imgUrl: 'product03.png',
    tag: ['人氣推薦', '門市限定'],
    title: '[新品]肉鬆小脆餅',
    cost: '150'
  },
  {
    imgUrl: 'product04.jpg',
    tag: ['人氣推薦', '門市限定'],
    title: '[新品]肉鬆小脆餅',
    cost: '150'
  },
  {
    imgUrl: 'product01.jpg',
    tag: ['人氣推薦', '門市限定'],
    title: '[新品]肉鬆小脆餅',
    cost: '150'
  }
]

function imageUrl(name) {
  return new URL(`/src/assets/image/product/${name}`, import.meta.url).href
}
function imageUrl2(name) {
  return new URL(`/src/assets/image/banner/v1/${name}`, import.meta.url).href
}


// const recommendProduct = ref([])
// const recommendSeries = ref([])

// function getData() {
//   apiHomeProductList()
//     .then((res) => {
//       console.log(res.data)
//       recommendSeries.value = res.data.map((item) => item.id)
//       recommendProduct.value = res.data[0].products
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }


// function changeSeries(id) {
//   apiHomeProductList()
//     .then((res) => {
//       console.log(res.data)
//       recommendProduct.value = res.data[id].products
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }


onMounted(() => {
  homeModal.value.openModal()
  // getData()
})
</script>
