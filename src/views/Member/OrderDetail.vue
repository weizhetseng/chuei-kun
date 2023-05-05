<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <div class="shadow-main mb-10">
        <h4 class="bg-Mred text-white text-lg p-2">訂購明細</h4>
        <div class="md:p-3 flex flex-col md:flex-row border-b border-Btable gap-2">
          <div class="w-full p-3 pb-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂購日期</p>
              <p class="w-full xs:w-[calc(100%-116px)]">2022/8/25 12:00</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂購編號</p>
              <p class="w-full xs:w-[calc(100%-116px)] text-Mred">L20220812003</p>
            </div>
          </div>
          <div class="w-full p-3 pt-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂單狀態</p>
              <p class="w-full xs:w-1/2 text-Mred">訂單處理中</p>
              <button class="bg-Mred w-32 rounded-tr-[30px] rounded-bl-[30px] py-1 shadow-mYellow text-white"
                type="button">
                取消訂單
              </button>
            </div>
            <button class="bg-Mred w-32 rounded-tr-[30px] rounded-bl-[30px] py-1 shadow-mYellow text-white" type="button">
              客服聊聊
            </button>
          </div>
        </div>
        <div class="md:p-3 flex flex-col md:flex-row border-b border-Btable gap-2">
          <div class="w-full p-3 border-b border-Btable md:border-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂購人</p>
              <p class="w-full xs:w-[calc(100%-116px)]">OOO</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">Email</p>
              <p class="w-full xs:w-[calc(100%-116px)]">springonionegg@gmail.com</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">手機號碼</p>
              <p class="w-full xs:w-[calc(100%-116px)]">09123456789</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">市話</p>
              <p class="w-full xs:w-[calc(100%-116px)]">0412345689</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">聯絡地址</p>
              <p class="w-full xs:w-[calc(100%-116px)]">408臺中市南屯區文心路一段378號1F</p>
            </div>
          </div>
          <div class="w-full p-3 border-b border-Btable md:border-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">收件人</p>
              <p class="w-full xs:w-[calc(100%-116px)]">OOO</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">Email</p>
              <p class="w-full xs:w-[calc(100%-116px)]">abcdefghijk@gmail.com</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">手機號碼</p>
              <p class="w-full xs:w-[calc(100%-116px)]">09123456789</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">市話</p>
              <p class="w-full xs:w-[calc(100%-116px)]">0412345689</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">聯絡地址</p>
              <p class="w-full xs:w-[calc(100%-116px)]">408臺中市南屯區文心路一段378號1F</p>
            </div>
          </div>
        </div>
        <div class="p-3 border-b border-Btable">
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">付款方式</p>
            <p class="text-Mred w-full xs:w-[calc(100%-116px)]">貨到付款</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">配送方式</p>
            <p class="text-Mred w-full xs:w-[calc(100%-116px)]">宅配</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">發票資料</p>
            <p class="flex flex-wrap w-full xs:w-[calc(100%-116px)]">
              ******** 個人電子發票-寄送至訂購人電子信箱
              <span class="text-Mred ml-3">發票將會於出貨後7天開立</span>
            </p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">商品小計</p>
            <p class="w-full xs:w-[calc(100%-116px)]">14260元</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">運費</p>
            <p class="w-full xs:w-[calc(100%-116px)]">200元</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">優惠折扣</p>
            <p class="w-full xs:w-[calc(100%-116px)]">1711元</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">訂單總金額</p>
            <p class="text-Mred w-full xs:w-[calc(100%-116px)]">12749元</p>
          </div>
        </div>
      </div>
      <table class="w-full shadow-main">
        <thead class="bg-Mred text-white text-lg">
          <tr>
            <th class="p-2">商品明細</th>
            <th class="p-2 hidden md:table-cell">數量</th>
            <th class="p-2 hidden md:table-cell">單價</th>
            <th class="p-2 hidden md:table-cell">合計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orderData" :key="item.title" class="flex flex-col md:table-row">
            <td class="p-3 border-Btable md:border-b">
              <div class="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-start">
                <img class="rounded-xl shadow-main" :src="imageUrl(item.imgUrl)" alt="" />
                {{ item.title }}
              </div>
            </td>
            <td
              class="p-3 border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="數量">
              {{ item.num }}
            </td>
            <td
              class="p-3 border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="單價">
              {{ item.cost }}
            </td>
            <td
              class="p-3 border-b border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:after:hidden"
              data-th="合計">
              {{ item.total }}元
            </td>
          </tr>
          <tr>
            <td>贈品明細</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import btn_memberList from '../../components/btn_memberList.vue'

const orderData = [
  {
    imgUrl: 'product01.jpg',
    title: '[新品]肉鬆小脆餅',
    num: '1',
    cost: '150',
    total: '150'
  },
  {
    imgUrl: 'product02.png',
    title: '[新品]肉鬆小脆餅',
    num: '1',
    cost: '150',
    total: '150'
  },
  {
    imgUrl: 'product03.png',
    title: '[新品]肉鬆小脆餅',
    num: '1',
    cost: '150',
    total: '150'
  },
  {
    imgUrl: 'product04.jpg',
    title: '[新品]肉鬆小脆餅',
    num: '1',
    cost: '150',
    total: '150'
  }
]
function imageUrl(name) {
  return new URL(`/src/assets/image/product/${name}`, import.meta.url).href
}
</script>
