<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full flex lg:w-4/5">
      <table class="w-4/5 block whitespace-nowrap overflow-x-scroll table-fixed m-auto sm:w-full sm:table">
        <thead class="bg-Mred text-white text-lg border border-Mred">
          <tr>
            <th class="p-2">訂單編號</th>
            <th class="p-2">訂購日期</th>
            <th class="p-2">訂單金額</th>
            <th class="p-2">訂單狀態</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="item in OrderData.OrderList " :key="item.OrderId">
            <td class="p-3 border border-t-0 border-wrap">{{ item.OrderId }}</td>
            <td class="p-3 border border-t-0 border-wrap">{{ item.OrderDate_Show }}</td>
            <td class="p-3 border border-t-0 border-wrap">${{ item.AmountTotal_Show }}</td>
            <td class="p-3 border border-t-0 border-wrap"
              :class="item.OrderStatus === '訂單處理中' ? 'text-Mred' : 'text-black'">
              <RouterLink :to="`/memberCenter/orderDetail/${item.OrderId}`">
                {{ item.OrderStatus }}
              </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import btn_memberList from '../../components/btn_memberList.vue'

import { useOrderData } from '../../stores/counter';

const OrderData = useOrderData()


onMounted(() => {
  OrderData.GetOrderData()
})
</script>
