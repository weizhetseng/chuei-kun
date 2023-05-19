<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">最新消息</h2>
      <p>HOT NEWS</p>
    </div>
    <div v-if="!route.path.includes('/newsDetail/')">
      <div class="flex gap-5">
        <ul class="lg:w-3/4 w-full mt-10 mb-16">
          <li class="flex flex-col gap-5 mb-10 items-start last:mb-0 lg:flex-row"
            v-for="data in NewsClassStore.currentData" :key="data.Id" data-aos="fade-up">
            <img class="w-full" :src="data.ListImgUrl" alt="" :class="data.ListImgUrl === '' ? 'lg:w-0' : 'lg:w-1/2'" />
            <div class="w-full" :class="data.ListImgUrl === '' ? 'lg:w-full' : 'lg:w-1/2'">
              <p class="mb-5">{{ data.SDate_Show }}</p>
              <div class="flex gap-5 mb-4 items-center">
                <span
                  class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-7 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">NEWS</span>
                <p class="text-xl font-bold">{{ data.Title }}</p>
              </div>
              <div class="mb-6" v-html="data.Contents"></div>
              <div
                class="group w-36 p-2 relative bg-white before:content-[''] before:block before:absolute before:transition-all before:w-0 before:h-full before:bg-Mred before:top-0 before:left-0 shadow-main after:content-[''] after:w-full after:h-full after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10 hover:before:w-full">
                <RouterLink :to="`/news/${data.ClassId}/newsDetail/${data.Id}`"
                  class="block text-Mred relative after:content-[''] after:block after:absolute after:bg-right after:w-4 after:h-4 after:bg-no-repeat after:bg-contain after:top-1/2 after:right-0 after:-translate-y-1/2 group-hover:text-white group-hover:after:bg-rightW">
                  了解更多</RouterLink>
              </div>
            </div>
          </li>
        </ul>
        <ul class="hidden w-1/4 lg:block xl:w-1/5">
          <li
            class="bg-Mred px-5 py-2 group first:relative first:before:content-[''] first:before:absolute first:before:block first:before:bg-down first:before:w-4 first:before:h-4 first:before:bg-no-repeat first:before:bg-contain first:before:top-1/2 first:before:right-4 first:before:-translate-y-1/2 first:after:content-[''] first:after:bolck first:after:absolute first:after:w-full first:after:h-full first:after:top-1 first:after:left-0.5 first:after:bg-Myellow first:after:-z-10 hover:bg-Myellow"
            v-for="item in NewsClassStore.newsList" :key="item.Id">
            <RouterLink :to="`/news/${item.Id}`" class="text-white text-xl block group-hover:text-Mred"
              @click="NewsClassStore.getNewsData(item.Id), NewsClassStore.currentPage = 1">
              {{ item.Title }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <ul class="flex justify-center items-center gap-4 mb-20 sm:gap-7">
        <li class="cursor-pointer hover:scale-110 active:scale-100">
          <div @click="NewsClassStore.prevPage()"><img src="../../assets/image/other/pageleft.png" alt="" /></div>
        </li>
        <li class="cursor-pointer" v-for="(page, index) in  NewsClassStore.displayPages " :key="index">
          <div
            class="border border-Mred rounded-full text-Mred flex items-center justify-center hover:scale-110 hover:bg-Mred hover:text-white active:scale-100 w-10 h-10 sm:w-12 sm:h-12"
            @click="NewsClassStore.handleCurrentPage(page)"
            :class="{ 'bg-Mred': NewsClassStore.currentPage === page, 'text-white': NewsClassStore.currentPage === page }">
            {{ page }}</div>
        </li>
        <li class="cursor-pointer hover:scale-110 active:scale-100">
          <div @click="NewsClassStore.nextPage()"><img src="../../assets/image/other/pageright.png" alt="" /></div>
        </li>
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'
import { useRoute } from 'vue-router'
import { useGetNewsClass } from '../../stores/counter';
import { onMounted } from 'vue'

const NewsClassStore = useGetNewsClass()

const route = useRoute()


onMounted(() => {
  NewsClassStore.getNewsData(route.params.ClassId)
})

</script>