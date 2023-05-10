<template>
  <div class="mb-20">
    <p class="mb-5">{{ selectedNews.SDate_Show }}</p>
    <div class="flex flex-col items-start gap-5 border-b border-gray pb-7 mb-7 sm:flex-row sm:items-center">
      <span
        class="bg-Mred text-white rounded-tr-3xl rounded-bl-3xl py-1 px-7 relative after:content-[''] after:w-full after:h-full after:rounded-tr-3xl after:rounded-bl-3xl after:absolute after:block after:top-1 after:left-0.5 after:bg-Myellow after:-z-10">NEWS</span>
      <h2 class="font-bold text-xl">{{ selectedNews.Title }}</h2>
    </div>
    <div class="pb-24 border-b border-gray mb-16 flex items-center justify-center">
      <div class="mb-7" v-html="selectedNews.Contents_HTML"></div>
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
import { useRoute } from 'vue-router';
import { apiGetNewsData } from '../../api/api';
const route = useRoute()

const selectedNews = ref([])

function getNewsDetail() {
  apiGetNewsData({
    u_id: $cookies.get('u_id') ?? '',
    AuthCode: "0",
    Lang: $cookies.get('Lang'),
    ClassId: route.params.ClassId,
    Id: route.params.Id
  })
    .then((res) => {
      selectedNews.value = res.data.NewsList[0]
      console.log(selectedNews)
    })
    .catch((err) => {
      console.log(err)
    })
}


onMounted(() => {
  getNewsDetail()
})

</script>



