<template>
  <div v-if="route.path === `/product/productItem/${route.params.id}`">
    <ul class="grid gap-4 mb-16 auto-rows-min xs:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
      <li class="relative" v-for="item in product" :key="item.Pidno">
        <div
          class="w-full min-[375px]:w-5/6 min-[414px]:w-2/3 xs:w-auto m-auto block h-full overflow-hidden rounded-tr-3xl rounded-bl-3xl shadow-mYellow">
          <RouterLink :to="`/product/productItem/${route.params.id}/productDetail`"
            class="group block h-[200px] overflow-hidden relative after:absolute after:content-[''] after:hidden after:w-full after:h-full after:top-0 after:left-0 after:bg-white after:opacity-40 hover:after:block">
            <img :src="item.ListImgUrl" alt="" class="h-full w-full object-cover rounded-tr-3xl rounded-bl-3xl" />
            <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block"
              src="../../assets/image/logo/logo-ck.png" alt="" />
          </RouterLink>
          <div class="p-4">
            <div class="flex flex-wrap gap-2 mb-1">
              <span class="text-white bg-Mred p-1" v-for="tag in item.ProductLabelList" :key="tag">{{ tag }}</span>
            </div>
            <h3 class="text-xl">{{ item.title }}</h3>
            <p class="mt-3 text-lg text-right text-Mred">單價:{{ item.UnitPrice_Show }}</p>
            <div class="mt-2 flex justify-between">
              <btn_calculate />
              <button type="button" class="bg-Mred flex items-center text-white px-2 rounded-sm">
                <img class="w-5 h-5" src="../../assets/image/other/cart.png" alt="" />
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <btn_pagination />
  </div>
  <RouterView />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import btn_calculate from '../../components/btn_calculate.vue'
import btn_pagination from '../../components/btn_pagination.vue'
import { apiGetProductData } from '../../api/api';
const route = useRoute()
const product = ref([])


function GetProductData() {
  apiGetProductData({
    u_id: $cookies.get('u_id') ?? '',
    AuthCode: "0",
    Lang: $cookies.get('Lang'),
    ProductClassId: route.params.id,
    Pidno: "",
    Keyword: ""
  })
    .then((res) => {
      console.log(res)
      product.value = res.data.ProductList
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  GetProductData()
})
</script>
