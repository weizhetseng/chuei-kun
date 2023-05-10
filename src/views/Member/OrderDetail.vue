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
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderDate_Show }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂購編號</p>
              <p class="w-full xs:w-[calc(100%-116px)] text-Mred">{{ OrderData.OrderListData.OrderId }}</p>
            </div>
          </div>
          <div class="w-full p-3 pt-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">訂單狀態</p>
              <p class="w-full xs:w-1/2 text-Mred">{{ OrderData.OrderListData.OrderDate }}</p>
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
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderName }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">Email</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderEmail }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">手機號碼</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderMobile }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">市話</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderTel }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">聯絡地址</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.OrderAddress }}</p>
            </div>
          </div>
          <div class="w-full p-3 border-b border-Btable md:border-0 md:p-0 md:w-1/2">
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">收件人</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.ReceiveName }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">Email</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.ReceiveEmail }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">手機號碼</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.ReceiveMobile }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">市話</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.ReceiveTel }}</p>
            </div>
            <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
              <p class="w-full xs:w-24 border-wrap xs:border-r">聯絡地址</p>
              <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.ReceiveAddress }}</p>
            </div>
          </div>
        </div>
        <div class="p-3 border-b border-Btable">
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">付款方式</p>
            <p class="text-Mred w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.PayWay }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">配送方式</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.DeliveryWay }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">預計到貨日</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.DeliveryDate }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">發票資料</p>
            <p class="flex flex-wrap w-full xs:w-[calc(100%-116px)]">
              {{ OrderData.OrderListData.InvoiceNumber }} 個人電子發票-寄送至訂購人電子信箱
              <span class="text-Mred ml-3">發票將會於出貨後7天開立</span>
            </p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">統一編號</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.InvoiceTaxId }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">載具號碼</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.DeviceNumber }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">商品小計</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.AmountReal_Show }}</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">運費</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.DeliveryFee_Show }}元</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">優惠折扣</p>
            <p class="w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.Discount_Show }}元</p>
          </div>
          <div class="flex flex-col gap-1 mb-3 xs:gap-5 xs:flex-row">
            <p class="w-full xs:w-24 border-wrap xs:border-r">訂單總金額</p>
            <p class="text-Mred w-full xs:w-[calc(100%-116px)]">{{ OrderData.OrderListData.AmountTotal_Show }}元</p>
          </div>
        </div>
      </div>
      <table class="w-full shadow-main mb-10">
        <thead class="bg-Mred text-white text-lg">
          <tr>
            <th class="p-2">商品明細</th>
            <th class="p-2 hidden md:table-cell">數量</th>
            <th class="p-2 hidden md:table-cell">單價</th>
            <th class="p-2 hidden md:table-cell">合計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in OrderData.OrderListData.ProductList" :key="item.ProductName"
            class="flex flex-col md:table-row">
            <td class="p-3 border-Btable md:border-b">
              <div class="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-start">
                <img class="rounded-xl shadow-main" :src="item.ImgUrl" alt="" />
                {{ item.ProductName }}
              </div>
            </td>
            <td
              class="p-3 border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="數量">
              {{ item.Quantity_Show }}
            </td>
            <td
              class="p-3 border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="單價">
              {{ item.UnitPrice_Show }}
            </td>
            <td
              class="p-3 border-b border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:after:hidden"
              data-th="合計">
              {{ item.TotalPrice_Show }}元
            </td>
          </tr>
        </tbody>
      </table>
      <table class="w-full shadow-main">
        <thead class="bg-Mred text-white text-lg">
          <tr>
            <th class="p-2">商品明細</th>
            <th class="p-2 hidden md:table-cell">數量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in OrderData.OrderListData.GiftList" :key="item.ProductName" class="flex flex-col md:table-row">
            <td class="p-3 border-Btable md:border-b">
              <div class="flex flex-col justify-center items-center gap-5 md:flex-row md:justify-start">
                <img class="rounded-xl shadow-main" :src="item.ImgUrl" alt="" />
                {{ item.ProductName }}
              </div>
            </td>
            <td
              class="p-3 border-Btable text-center relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="數量">
              {{ item.Quantity_Show }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import btn_memberList from '../../components/btn_memberList.vue'
import { useOrderData } from '../../stores/counter';

const OrderData = useOrderData()

const route = useRoute()

onMounted(() => {
  OrderData.GetOrderData(route.params.id)
})
</script>
