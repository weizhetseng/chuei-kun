<template>
  <div class="mb-20">
    <p class="mb-5">{{ NewsClassStore.newsDetailData.SDate_Show }}</p>
    <div class="flex flex-col items-start gap-5 border-b border-gray pb-7 mb-7 sm:flex-row sm:items-center">
      <span
        class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-7 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">NEWS</span>
      <h2 class="font-bold text-xl">{{ NewsClassStore.newsDetailData.Title }}</h2>
    </div>
    <div class="pb-24 border-b border-gray mb-16 flex items-center justify-center">
      <div class="mb-7" v-html="NewsClassStore.newsDetailData.Contents_HTML"></div>
    </div>

    <RouterLink :to="`/news/${route.params.ClassId}`" class="group linkStyle">
      <span class="linkWordStyle">返回列表</span>
    </RouterLink>
  </div>
  <div>
  </div>
</template>

<script setup>

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useGetNewsClass } from '../../stores/counter';
const route = useRoute()

const NewsClassStore = useGetNewsClass()

onMounted(() => {
  NewsClassStore.getNewsData(route.params.ClassId, route.params.Id)
})

</script>



