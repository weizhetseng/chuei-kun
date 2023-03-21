<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">營業據點</h2>
      <p>Business base</p>
    </div>
    <div class="w-full mx-auto mb-20 lg:w-4/5">
      <div class="flex flex-col items-center gap-2 mb-5 lg:gap-14 lg:flex-row lg:mb-14">
        <h3 class="text-2xl font-bold">全年無休，全台宅配</h3>
        <p class="text-lg">訂購專線：<span class="text-Mred">037-867840</span></p>
        <p class="text-lg">傳真專線：<span class="text-Mred">037-866407</span></p>
      </div>
      <table class="w-full">
        <thead class="border-t-2 border-b border-t-Mred border-b-gold text-lg">
          <tr class="hidden lg:table-row">
            <th class="p-3">營業門市</th>
            <th class="p-3">營業時間</th>
            <th class="p-3">分店地址</th>
          </tr>
          <tr class="lg:hidden">
            <th class="p-3">營業據點</th>
          </tr>
        </thead>
        <tbody v-for="item in locationList" :key="item.title">
          <tr>
            <td
              class="block py-3 pl-20 relative after:content-[attr(data-th)] after:absolute after:block after:top-1/2 after:left-0 after:-translate-y-1/2 lg:p-5 lg:table-cell lg:after:hidden"
              data-th="營業門市:"
            >
              {{ item.title }}
            </td>
            <td
              class="block py-3 pl-20 relative after:content-[attr(data-th)] after:absolute after:block after:top-1/2 after:left-0 after:-translate-y-1/2 lg:p-5 lg:table-cell lg:after:hidden"
              data-th="營業時間:"
            >
              <div class="flex items-center gap-1 lg:justify-center">
                <div
                  class="w-7 h-7 border border-Mred rounded-full flex items-center justify-center shrink-0"
                >
                  <img src="../../assets/image/other/clock.png" alt="" />
                </div>
                {{ item.time }}
              </div>
            </td>
            <td
              class="block py-3 pl-20 relative after:content-[attr(data-th)] after:absolute after:block after:top-1/2 after:left-0 after:-translate-y-1/2 lg:p-5 lg:table-cell lg:max-w-[400px] lg:after:hidden"
              data-th="分店地址:"
            >
              <div class="flex items-center gap-1 lg:justify-center">
                <div
                  class="w-7 h-7 border border-Mred rounded-full flex items-center justify-center shrink-0"
                >
                  <img src="../../assets/image/other/location.png" alt="" />
                </div>
                {{ item.address }}
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="relative top-0 pt-[50%]">
              <div
                class="w-full h-full absolute top-0 border-b border-dashed border-gray"
                data-aos="fade-up"
              >
                <iframe
                  class="w-full h-full pb-10"
                  :src="item.map"
                  style="border: 0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'

const locationList = [
  {
    title: '垂坤食品-總店',
    time: '07:00am ~ 22:00pm',
    address: '苗栗縣苑裡鎮大同88號(苑裡市場內)',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.221899143101!2d120.65157221537125!3d24.443085467877143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346909682e30bbd5%3A0xd90bb85860e49db1!2z5Z6C5Z2k6aOf5ZOBIOiLkeijoee4veW6lw!5e0!3m2!1szh-TW!2stw!4v1665472149865!5m2!1szh-TW!2stw'
  },
  {
    title: '垂坤食品-旗艦店',
    time: '08:00am ~ 21:00pm',
    address: '苗栗縣苑裡鎮山柑里8鄰77-16號(國道三號苑裡交流道下100公尺)',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.495524964324!2d120.66542241537066!3d24.398846869610725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34690f1fb574de61%3A0x322265bd5fb0c738!2z5Z6C5Z2k6aOf5ZOBIOaXl-iJpuW6lw!5e0!3m2!1szh-TW!2stw!4v1665472196240!5m2!1szh-TW!2stw'
  }
]
</script>
