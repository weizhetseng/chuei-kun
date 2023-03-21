<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full flex lg:w-4/5">
      <table
        class="w-4/5 block whitespace-nowrap overflow-x-scroll table-fixed m-auto sm:w-full sm:table"
      >
        <thead class="bg-Mred text-white text-lg border border-Mred">
          <tr>
            <th class="p-2">訂單編號</th>
            <th class="p-2">訂購日期</th>
            <th class="p-2">訂單金額</th>
            <th class="p-2">訂單狀態</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="item in orderList" :key="item.title">
            <td class="p-3 border border-t-0 border-wrap">{{ item.title }}</td>
            <td class="p-3 border border-t-0 border-wrap">{{ item.date }}</td>
            <td class="p-3 border border-t-0 border-wrap">${{ item.cost }}</td>
            <td
              class="p-3 border border-t-0 border-wrap"
              :class="item.status ? 'text-black' : 'text-Mred'"
            >
              <RouterLink :to="`/memberCenter/orderDetail/${item.title}`">{{
                item.status ? '已付款' : '未付款'
              }}</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import btn_memberList from '../../components/btn_memberList.vue'

const orderList = [
  {
    title: 'L20220812003',
    date: '2022/08/31 12:00',
    cost: '1000',
    status: true
  },
  {
    title: 'L20220812004',
    date: '2022/08/31 12:00',
    cost: '1000',
    status: false
  },
  {
    title: 'L20220812005',
    date: '2022/08/31 12:00',
    cost: '1000',
    status: false
  },
  {
    title: 'L20220812006',
    date: '2022/08/31 12:00',
    cost: '1000',
    status: true
  }
]
</script>
