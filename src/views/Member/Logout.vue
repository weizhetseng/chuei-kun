<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <div class="mt-7">
        <p class="text-center text-3xl font-bold text-Mred mb-20">會員已登出</p>
        <div class="text-center">
          <RouterLink to="/" class="group linkStyle">
            <span class="linkWordStyle">返回首頁</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import btn_memberList from '../../components/btn_memberList.vue'
</script>
