<template>
  <ul>
    <li
      class="bg-Mred px-5 py-2 group first:relative first:before:content-[''] first:before:absolute first:before:block first:before:bg-down first:before:w-4 first:before:h-4 first:before:bg-no-repeat first:before:bg-contain first:before:top-1/2 first:before:right-4 first:before:-translate-y-1/2 first:after:content-[''] first:after:bolck first:after:absolute first:after:w-full first:after:h-full first:after:top-1 first:after:left-0.5 first:after:bg-Myellow first:after:-z-10 hover:bg-Myellow"
      v-for="item in asideList" :key="item.title">
      <RouterLink class="text-white text-xl block group-hover:text-Mred" :to="item.url">{{
        item.title
      }}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
const asideList = [
  {
    url: '#',
    title: '最新消息'
  },
  {
    url: '#',
    title: '營業時間'
  },
  {
    url: '#',
    title: '食品檢驗報告'
  },
  {
    url: '#',
    title: '食品工廠登記字號'
  },
  {
    url: '#',
    title: '食品業者登記字號'
  },
  {
    url: '#',
    title: '食品責任保險單'
  },
  {
    url: '#',
    title: '定型化契約'
  }
]
</script>
