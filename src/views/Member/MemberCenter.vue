<template>
  <btn_banner />
  <btn_animateBG />
  <div class="container mt-20">
    <btn_breadcrumb />
    <div class="titleStyle mb-9">
      <h2 class="text-4xl text-Mred font-bold">會員專區</h2>
      <p>Members Only</p>
    </div>
    <div class="mb-20" v-if="route.path === '/memberCenter'">
      <p class="text-2xl text-center mb-4">OOO 會員您好!</p>
      <ul class="flex flex-wrap justify-center mb-10 gap-5">
        <li>
          <RouterLink to="/memberCenter/orderSearch" class="group linkStyle2">
            <span class="linkWordStyle2">查詢訂單資料</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/memberCenter/orderSearch" class="group linkStyle2">
            <span class="linkWordStyle2">修改會員資料</span>
          </RouterLink>
        </li>
      </ul>
      <ul class="flex flex-wrap justify-center gap-5">
        <li>
          <RouterLink to="/memberCenter/orderSearch" class="group linkStyle2">
            <span class="linkWordStyle2">變更密碼</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/memberCenter/orderSearch" class="group linkStyle2">
            <span class="linkWordStyle2">綁定其他帳號</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/memberCenter/orderSearch" class="group linkStyle2">
            <span class="linkWordStyle2">會員登出</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'

const route = useRoute()

</script>
