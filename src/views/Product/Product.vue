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
        <div>
          <div class="relative bg-Mred mb-10 p-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow">
            <input class="w-[calc(100%-48px)] bg-transparent outline-none border-b border-white placeholder:text-white"
              id="searchProduct" name="searchProduct" type="text" placeholder="關鍵字搜尋" />
            <label
              class="absolute w-12 h-full bg-white rounded-tr-3xl rounded-bl-3xl top-0 right-0 flex items-center justify-center"
              for="searchProduct">
              <img src="@/assets/image/other/search.png" alt="" />
            </label>
          </div>
          <ul>
            <li class="mb-3" v-for="item in productList" :key="item.Id" :class="{ active: item.Id == route.params.id }">
              <RouterLink
                class="block text-xl relative before:absolute before:content-[''] before:block before:w-3 before:h-3 before:bg-Mred before:rotate-45 before:top-1/2 before:right-12 before:-translate-y-1/2 before:transition-all after:absolute after:content-[''] after:block after:w-12 after:h-px after:bg-Mred after:top-1/2 after:right-0 after:-translate-y-1/2 after:transition-all hover:text-Mred hover:before:right-9 hover:after:w-9"
                :class="{
                  'text-Mred': route.params.id == item.Id,
                  'before:right-9': route.params.id == item.Id,
                  'after:w-9': route.params.id == item.Id
                }" :to="`/product/productItem/${item.Id}`">{{ item.Title }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full xl:w-4/5">
        <ul
          class="w-full xl:w-4/5 m-auto flex flex-col items-center justify-center text-2xl font-bold gap-5 mb-10 sm:flex-row"
          v-if="['shopMethod1', 'shopMethod2', 'shopMethod3'].includes(route.path.split('/')[2])">
          <li
            class="group w-2/3 sm:w-1/3 text-center p-3 relative before:absolute before:transition-all before:block before:content-[''] before:w-0 before:h-full before:bg-Mred before:top-0 before:left-0 after:absolute after:block after:content-[''] after:w-full after:h-full after:top-1 after:left-1 after:bg-Myellow after:-z-10 hover:shadow-main hover:before:w-full"
            :class="{ 'bg-Mred': item.url === route.path, 'bg-white': item.url !== route.path }"
            v-for="item in shopMethodLink" :key="item.title">
            <RouterLink
              class="relative block after:absolute after:block after:w-5 after:h-5 after:content-[''] after:top-1/2 after:-translate-y-1/2 after:right-2 after:bg-no-repeat after:bg-center after:bg-cover group-hover:text-white group-hover:after:bg-rightW"
              :class="{
                'text-Mred': item.url !== route.path,
                'text-white': item.url === route.path,
                'after:bg-right': item.url !== route.path,
                'after:bg-rightW': item.url === route.path
              }" :to="item.url">
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
import btn_animateBG from '../../components/btn_animateBG.vue'
import { apiGetProductClass, apiGetProductData } from '../../api/api'
import { onMounted, ref } from 'vue'

const route = useRoute()
const productList = ref([])
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
function GetProductClass() {
  apiGetProductClass({
    u_id: $cookies.get('u_id') ?? '',
    AuthCode: "0",
    Lang: $cookies.get('Lang')
  })
    .then((res) => {
      console.log(res)
      productList.value = res.data.ProductClassList
    })
    .catch((err) => {
      console.log(err)
    })
}



onMounted(() => {
  GetProductClass()
})



</script>
