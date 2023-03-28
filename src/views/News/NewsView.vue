<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">最新消息</h2>
      <p>HOT NEWS</p>
    </div>
    <div v-if="route.path === '/news'">
      <div class="flex gap-5">
        <ul class="lg:w-3/4 w-full mt-10 mb-16">
          <li class="flex flex-col gap-5 mb-10 items-start last:mb-0 lg:flex-row" v-for="item in newsList"
            :key="item.title" data-aos="fade-up">
            <img class="lg:w-1/2 w-full" :src="imageUrl(item.imgUrl)" alt="" />
            <div class="lg:w-1/2 w-full">
              <p class="mb-5">{{ item.date }}</p>
              <div class="flex gap-5 mb-4 items-center">
                <span
                  class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-7 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">NEWS</span>
                <p class="text-xl font-bold">{{ item.title }}</p>
              </div>
              <p class="mb-6">{{ item.content }}</p>
              <div
                class="group w-36 p-2 relative bg-white before:content-[''] before:block before:absolute before:transition-all before:w-0 before:h-full before:bg-Mred before:top-0 before:left-0 shadow-main after:content-[''] after:w-full after:h-full after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10 hover:before:w-full">
                <RouterLink to="/news/newsDetail/0"
                  class="block text-Mred relative after:content-[''] after:block after:absolute after:bg-right after:w-4 after:h-4 after:bg-no-repeat after:bg-contain after:top-1/2 after:right-0 after:-translate-y-1/2 group-hover:text-white group-hover:after:bg-rightW">
                  了解更多</RouterLink>
              </div>
            </div>
          </li>
        </ul>
        <btn_newsList class="hidden w-1/4 lg:block xl:w-1/5" />
      </div>
      <btn_pagination class="mb-20" />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_newsList from '../../components/btn_newsList.vue'
import btn_pagination from '../../components/btn_pagination.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'
import { apiNewsList } from '../../api/api'

import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const route = useRoute()
const newsList = ref([])

// const newsList = [
//   {
//     date: '2022-07-28',
//     imgUrl: 'news01.png',
//     title: '假標題假標題假標題假標題假標題',
//     content:
//       '假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容'
//   },
//   {
//     date: '2022-04-28',
//     imgUrl: 'news02.png',
//     title: '假標題假標題假標題假標題假標題',
//     content:
//       '假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容'
//   },
//   {
//     date: '2022-03-28',
//     imgUrl: 'news04.png',
//     title: '假標題假標題假標題假標題假標題',
//     content:
//       '假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容'
//   },
//   {
//     date: '2022-01-28',
//     imgUrl: 'news03.png',
//     title: '假標題假標題假標題假標題假標題',
//     content:
//       '假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容'
//   }
// ]

function getData() {
  apiNewsList()
    .then((res) => {
      console.log(res)
      newsList.value = res.data
      console.log(newsList)
    })
    .catch((err) => {
      console.log(err)
    })
}

function imageUrl(name) {
  return new URL(`/src/assets/image/news/${name}`, import.meta.url).href
}

onMounted(() => {
  getData()
})
</script>
