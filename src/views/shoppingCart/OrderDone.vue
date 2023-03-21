<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">購物車</h2>
      <p>Shopping Cart</p>
    </div>
    <h3 class="text-center text-4xl mb-12 font-bold text-yw">訂單已成立，感謝您的訂購。</h3>
    <div class="shadow-main mb-10 rounded-xl">
      <h4 class="bg-Mred text-white text-lg p-2 rounded-tl-xl rounded-tr-xl">訂購明細</h4>
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
      <div class="p-3 border-b border-Btable rounded-bl-xl rounded-br-xl">
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
            個人電子發票-寄送至訂購人電子信箱
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
    <div class="shadow-main rounded-xl mb-16">
      <table class="w-full">
        <thead class="bg-Mred text-white text-lg">
          <tr>
            <th class="p-2 rounded-tl-xl rounded-tr-xl md:rounded-tr-none">訂單明細</th>
            <th class="p-2 hidden md:table-cell">數量</th>
            <th class="p-2 hidden md:table-cell">單價</th>
            <th class="p-2 rounded-tr-xl hidden md:table-cell">合計</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="flex flex-col md:table-row border-b border-Btable last:border-b-0"
            v-for="item in orderData"
            :key="item.title"
          >
            <td class="p-3">
              <div
                class="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-start"
              >
                <img class="rounded-xl shadow-main" :src="imageUrl(item.imgUrl)" alt="" />
                {{ item.title }}
              </div>
            </td>
            <td
              class="p-3 text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:after:hidden"
              data-th="數量"
            >
              {{ item.num }}
            </td>
            <td
              class="p-3 text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:after:hidden"
              data-th="單價"
            >
              {{ item.cost }}
            </td>
            <td
              class="p-3 text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:after:hidden"
              data-th="合計"
            >
              {{ item.total }}元
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center items-center gap-5 mb-20">
      <RouterLink to="/" class="group linkStyle">
        <span class="linkWordStyle">回首頁</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'

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
