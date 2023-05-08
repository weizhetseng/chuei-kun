<template>
  <div class="mb-20">
    <p class="mb-5">{{ selectedNews.date }}</p>
    <div class="flex flex-col items-start gap-5 border-b border-gray pb-7 mb-7 sm:flex-row sm:items-center">
      <span
        class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-7 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">NEWS</span>
      <h2 class="font-bold text-xl">{{ selectedNews.title }}</h2>
    </div>
    <div class="pb-24 border-b border-gray mb-16">
      <p class="mb-7">{{ selectedNews.content }}</p>
      <div class="flex">
        <img class="w-1/2" src="../../assets/image/news/news05.png" alt="" />
        <img class="w-1/2" src="../../assets/image/news/news06.png" alt="" />
      </div>
    </div>

    <RouterLink to="/news" class="group linkStyle">
      <span class="linkWordStyle">返回列表</span>
    </RouterLink>
  </div>
  <div>
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { apiGetNewsData } from '../../api/api';

const selectedNews = ref([])

function getNewsDetail() {
  apiGetNewsData({
    u_id: $cookies.get('u_id') ?? '',
    AuthCode: "0",
    Lang: $cookies.get('Lang'),
    ClassId: 0,
    Id: 0
  })
    .then((res) => [
      console.log(res)
    ])
    .catch((err) => {
      console.log(err)
    })
}


onMounted(() => {
  getNewsDetail()
})

</script>



