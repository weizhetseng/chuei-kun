<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">購物車</h2>
      <p>Shopping Cart</p>
    </div>
    <h3 class="text-2xl mb-12 font-bold">您的購物清單如下</h3>
    <div class="rounded-xl shadow-main mb-16">
      <table class="w-full">
        <thead>
          <tr class="bg-Mred text-white hidden md:table-row">
            <th class="rounded-tl-xl p-3 text-xl">商品名稱</th>
            <th class="p-3 text-xl">數量</th>
            <th class="p-3 text-xl">單價</th>
            <th class="p-3 text-xl">合計</th>
            <th class="rounded-tr-xl p-3 text-xl"></th>
          </tr>
          <tr class="bg-Mred text-white md:hidden">
            <th class="rounded-tl-xl rounded-tr-xl p-3 text-xl">商品清單</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-b border-Btable flex flex-col md:table-row">
            <td class="p-8">
              <div class="flex items-center gap-5 flex-col xl:flex-row">
                <img class="rounded-xl shadow-main" src="../../assets/image/product/product01.jpg" alt="" />
                <div>
                  <p class="text-lg">[新品]肉鬆小脆餅</p>
                  <p class="text-lgray">運送方式: 一般運送</p>
                  <p class="text-lgray">編號: 10110</p>
                </div>
              </div>
            </td>
            <td class="p-8">
              <btn_calculate />
            </td>
            <td
              class="p-8 border-Btable text-center text-lg relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="單價">
              1400
            </td>
            <td
              class="p-8 border-Btable text-Wred text-center text-lg relative whitespace-nowrap after:absolute after:text-black after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="合計">
              1400元
            </td>
            <td class="p-8">
              <button type="button" class="flex items-center gap-1 text-lg m-auto text-lgray">
                <img src="../../assets/image/other/trashCan.png" alt="" />
                刪除
              </button>
            </td>
          </tr>
          <tr class="border-b border-dashed border-Btable text-2xl flex justify-between md:table-row">
            <td class="p-8" colspan="4">
              <p class="mb-4">商品總金額</p>
              <p>活動折扣</p>
            </td>
            <td class="p-8 text-right">
              <p class="mb-4 line-through text-llgray">14260</p>
              <p class="text-Wred">1711</p>
            </td>
          </tr>
          <tr class="border-b border-Btable text-2xl flex justify-between md:table-row">
            <td class="p-8" colspan="4">結帳總金額</td>
            <td class="p-8 text-right whitespace-nowrap">12549元</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-5 mb-20">
      <RouterLink to="/product/shopMethod1" class="group linkStyle">
        <span class="linkWordStyle">繼續購物</span>
      </RouterLink>
      <RouterLink to="/memberCheckOut" class="group linkStyle">
        <span class="linkWordStyle">會員結帳</span>
      </RouterLink>
      <RouterLink to="/memberCheckOut" class="group linkStyle">
        <span class="linkWordStyle">訪客結帳</span>
      </RouterLink>
    </div>
  </div>
  <btn_chatRoom />
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_calculate from '../../components/btn_calculate.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'
import btn_chatRoom from '../../components/btn_chatRoom.vue'
</script>
