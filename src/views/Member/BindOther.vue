<template>
  <div class="mb-20 flex gap-10">
    <div class="w-1/5 hidden lg:block">
      <btn_memberList />
    </div>
    <div class="w-full lg:w-4/5">
      <ul class="w-full sm:w-2/3 m-auto">
        <li class="flex flex-col gap-5 mb-8 xs:flex-row">
          <div class="w-full flex items-center gap-2 xs:w-40 xs:border-r xs:border-gray text-lg">
            <div class="border border-Mred rounded-full p-3">
              <img src="../../assets/image/other/facebook.png" alt="" />
            </div>
            Facebook
          </div>
          <div
            class="w-full pb-1 xs:w-[calc(100%-164px)] flex items-center justify-between border-b border-wrap"
          >
            <p class="text-lg font-bold">已綁定</p>
            <button
              class="bg-Mred w-32 rounded-tr-[30px] rounded-bl-[30px] py-1 shadow-mYellow text-white"
            >
              解除綁定
            </button>
          </div>
        </li>
        <li class="flex flex-col gap-5 mb-8 xs:flex-row">
          <div class="w-full flex items-center gap-2 xs:w-40 xs:border-r xs:border-gray text-lg">
            <div class="border border-Mred rounded-full p-3">
              <img src="../../assets/image/other/line.png" alt="" />
            </div>
            LINE
          </div>
          <div
            class="w-full pb-1 xs:w-[calc(100%-164px)] flex items-center justify-between border-b border-wrap"
          >
            <p class="text-lg font-bold">未綁定</p>
            <button
              class="bg-Mred w-32 rounded-tr-[30px] rounded-bl-[30px] py-1 shadow-mYellow text-white"
            >
              綁定
            </button>
          </div>
        </li>
        <li class="flex flex-col gap-5 mb-8 xs:flex-row">
          <div class="w-full flex items-center gap-2 xs:w-40 xs:border-r xs:border-gray text-lg">
            <div class="border border-Mred rounded-full p-3">
              <img src="../../assets/image/other/google.png" alt="" />
            </div>
            GOOGLE
          </div>
          <div
            class="w-full pb-1 xs:w-[calc(100%-164px)] flex items-center justify-between border-b border-wrap"
          >
            <p class="text-lg font-bold">已綁定</p>
            <button
              class="bg-Mred w-32 rounded-tr-[30px] rounded-bl-[30px] py-1 shadow-mYellow text-white"
            >
              解除綁定
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import btn_memberList from '../../components/btn_memberList.vue'
</script>
