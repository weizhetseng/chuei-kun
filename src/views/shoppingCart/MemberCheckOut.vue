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
            <th class="rounded-tr-xl p-3 text-xl">合計</th>
          </tr>
          <tr class="bg-Mred text-white md:hidden">
            <th class="rounded-tl-xl rounded-tr-xl p-3 text-xl">商品清單</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-Btable flex flex-col md:table-row">
            <td class="p-8">
              <div class="flex flex-col items-center gap-5 lg:flex-row">
                <img class="rounded-xl shadow-main" src="../../assets/image/product/product01.jpg" alt="" />
                <div>
                  <p class="text-lg">[新品]肉鬆小脆餅</p>
                  <p class="text-lgray">運送方式:一般運送</p>
                  <p class="text-lgray">編號: 10110</p>
                </div>
              </div>
            </td>
            <td
              class="p-8 border-Btable text-center text-lg relative after:absolute after:content-[attr(data-th)] after:block after:top-1/2 after:left-10 after:-translate-y-1/2 md:border-b md:after:hidden"
              data-th="數量">
              1
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
          </tr>
          <tr class="text-base border-b border-dashed border-Btable xs:text-2xl flex justify-between md:table-row">
            <td class="p-8" colspan="3">
              <p class="mb-4">商品總金額</p>
              <p>活動折扣</p>
            </td>
            <td class="p-8 text-right">
              <p class="mb-4 line-through text-llgray">14260</p>
              <p class="text-Wred">1711</p>
            </td>
          </tr>
          <tr class="text-base border-b border-Btable xs:text-2xl flex justify-between md:table-row">
            <td class="p-8" colspan="3">
              <p class="mb-4">運費</p>
              <p>結帳總金額</p>
            </td>
            <td class="p-8 text-right">
              <p class="mb-4">120元</p>
              <p class="whitespace-nowrap">12549元</p>
            </td>
          </tr>
          <tr>
            <td class="p-8" colspan="5">
              <div class="flex max-w-[700px] items-center gap-1 bg-Btable p-2">
                <img src="../../assets/image/other/circle-info-solid.png" alt="" />
                常溫商品滿1500元享免運費，如需裝到第二箱需滿3000元享免運費，以此類推。
                惝若客服評估後需加收運費，會再與您聯繫。
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <form action="">
      <!-- <div class="mb-10 shadow-main rounded-xl">
                <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">訂購人資料</h4>
                <ul class="p-7 text-lg">
                    <li class="mb-5 flex flex-col gap-3 xs:flex-row">
                        <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
                            for="">姓名</label>
                        <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
                            v-model="orderUser.name">
                    </li>
                    <li class="mb-5 flex flex-col gap-3 xs:flex-row">
                        <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
                            for="">E-mail</label>
                        <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
                            v-model="orderUser.email">
                    </li>
                    <li class="mb-5 flex flex-col gap-3 xs:flex-row">
                        <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
                            for="">手機號碼</label>
                        <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
                            v-model="orderUser.tphone">
                    </li>
                    <li class="mb-5 flex flex-col gap-3 xs:flex-row">
                        <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
                            for="">市話</label>
                        <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
                            v-model="orderUser.hphone">
                    </li>
                    <li class="flex flex-col gap-3 xs:flex-row">
                        <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
                            for="">聯絡地址</label>
                        <div class="w-full xs:w-[calc(100%-140px)] flex flex-col md:w-2/3">
                            <div class="flex flex-col gap-3 mb-3 xs:flex-row">
                                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                                    <option value="">縣市</option>
                                </select>
                                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                                    <option value="">鄉鎮區</option>
                                </select>
                                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                                    <option value="">街道名稱</option>
                                </select>
                            </div>
                            <input type="text" class="w-full shadow-main p-2 rounded-lg outline-none"
                                v-model="orderUser.address">
                        </div>
                    </li>
                </ul>
            </div> -->
      <!-- 訪客結帳 -->
      <div class="mb-10 shadow-main rounded-xl">
        <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">訂購人資料</h4>
        <ul class="p-7 text-lg">
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">姓名</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.name" />
            </div>
          </li>
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">E-mail</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.email" />
              <button class="bg-Mred text-white py-[2px] px-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow" type="button">
                發送驗證碼
              </button>
            </div>
          </li>
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">E-mail驗證碼</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.ecode" />
              <button class="bg-Mred text-white py-[2px] px-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow" type="button">
                重發驗證碼(59)
              </button>
            </div>
          </li>
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">手機號碼</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.tphone" />
              <button class="bg-Mred text-white py-[2px] px-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow" type="button">
                發送驗證碼
              </button>
            </div>
          </li>
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">簡訊驗證碼</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.tcode" />
              <button class="bg-Mred text-white py-[2px] px-5 rounded-tr-3xl rounded-bl-3xl shadow-mYellow" type="button">
                重發驗證碼(59)
              </button>
            </div>
          </li>
          <li class="mb-5 flex flex-col gap-3 relative md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">市話</label>
            <div class="w-full md:w-[calc(100%-112px)] flex flex-col gap-2 items-end md:items-center md:flex-row">
              <input type="text" class="w-full md:w-2/3 shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.hphone" />
            </div>
          </li>
          <li class="flex flex-col gap-3 md:flex-row">
            <label class="w-full font-bold md:w-28 md:border-r md:border-Btable flex items-center justify-start"
              for="">聯絡地址</label>
            <div class="w-full md:w-[calc(100%-140px)] flex flex-col">
              <div class="flex flex-col gap-3 mb-3 md:flex-row">
                <select class="w-full md:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">縣市</option>
                </select>
                <select class="w-full md:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">鄉鎮區</option>
                </select>
                <select class="w-full md:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">街道名稱</option>
                </select>
              </div>
              <input type="text" class="w-full shadow-main p-2 rounded-lg outline-none"
                v-model="orderUserVistor.address" />
            </div>
          </li>
        </ul>
      </div>
      <div class="mb-10 shadow-main rounded-xl">
        <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">收件人資料</h4>
        <ul class="p-7 text-lg">
          <li class="mb-2">
            <input id="checked" type="checkbox" v-model="checked" @click="checkedUser()" />
            <label class="text-lg font-bold" for="checked">同訂購人</label>
          </li>
          <li class="mb-5 flex flex-col gap-3 xs:flex-row">
            <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
              for="">姓名</label>
            <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
              v-model="consignee.name" />
          </li>
          <li class="mb-5 flex flex-col gap-3 xs:flex-row">
            <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
              for="">E-mail</label>
            <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
              v-model="consignee.email" />
          </li>
          <li class="mb-5 flex flex-col gap-3 xs:flex-row">
            <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
              for="">手機號碼</label>
            <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
              v-model="consignee.tphone" />
          </li>
          <li class="mb-5 flex flex-col gap-3 xs:flex-row">
            <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
              for="">市話</label>
            <input type="text" class="w-full shadow-main p-2 rounded-lg xs:w-2/3 md:w-1/2 outline-none"
              v-model="consignee.hphone" />
          </li>
          <li class="flex flex-col gap-3 xs:flex-row">
            <label class="w-full font-bold xs:w-28 xs:border-r xs:border-Btable flex items-center justify-start"
              for="">聯絡地址</label>
            <div class="w-full xs:w-[calc(100%-140px)] flex flex-col md:w-2/3">
              <div class="flex flex-col gap-3 mb-3 xs:flex-row">
                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">縣市</option>
                </select>
                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">鄉鎮區</option>
                </select>
                <select class="w-full xs:w-1/3 shadow-main p-2 rounded-lg outline-none" name="" id="">
                  <option value="">街道名稱</option>
                </select>
              </div>
              <input type="text" class="w-full shadow-main p-2 rounded-lg outline-none" v-model="consignee.address" />
            </div>
          </li>
        </ul>
      </div>
      <div class="mb-10 shadow-main rounded-xl">
        <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">付款方式</h4>
        <ul class="p-7 text-lg">
          <li class="mb-8">
            <input class="mr-3" type="radio" name="deliver" />
            <label class="text-lg font-bold" for="">ATM帳號匯款</label>
          </li>
          <li>
            <input class="mr-3" type="radio" name="deliver" />
            <label class="text-lg font-bold" for="">貨到付款</label>
          </li>
        </ul>
      </div>
      <div class="mb-10 shadow-main rounded-xl">
        <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">選擇配送方式</h4>
        <ul class="p-7 text-lg">
          <li class="mb-3">
            <input class="mr-3" type="radio" />
            <label class="text-lg font-bold" for="">宅配到府</label>
          </li>
          <li class="mb-3 flex flex-col gap-3 xs:items-center xs:flex-row">
            <label class="w-28 text-lg font-bold" for="">預計到貨日期</label>
            <input class="w-full xs:w-[calc(100%-124px)] md:w-1/2 shadow-main p-2 rounded-lg outline-none" type="date" />
          </li>
          <li class="text-Mred">
            <p class="mb-2">*預計到貨日期，最多只能選未來的四個月，到貨日不能選星期日，低溫不能選星期一</p>
            <p class="mb-2">*配送時間為白天，請填寫白天可以簽收的中文地址，以利宅配人員辨識與聯繫</p>
            <p class="mb-2">*因商品配送方式採用宅配到府，需要專人簽收，寄送地址請勿填寫郵政信箱</p>
          </li>
        </ul>
      </div>
      <div class="shadow-main rounded-xl mb-16">
        <h4 class="bg-Mred text-white rounded-t-xl p-2 text-2xl">
          <p>發票資料</p>
          <p class="flex items-center">
            <img src="../../assets/image/other/circle-info-solid(w).png" alt="" />
            本公司全面採用電子發票
          </p>
        </h4>
        <ul class="p-7 text-lg">
          <li class="mb-5 flex flex-col gap-3 md:flex-row">
            <div class="w-full font-bold md:w-32 md:border-r md:border-Btable flex items-center justify-start">
              個人電子發票
            </div>
            <div class="w-full md:w-[calc(100%-140px)] flex gap-5 flex-col sm:flex-row sm:items-center">
              <div>
                <input class="mr-3" type="radio" name="" id="" />
                <label for="">寄送至訂購人電子信箱</label>
              </div>
              <div>
                <input class="mr-3" type="radio" name="" id="" />
                <label for="">載具號碼</label>
                <input class="shadow-main p-1 ml-3 rounded-lg outline-none" type="text" name="" id="" placeholder="/" />
              </div>
            </div>
          </li>
          <li class="flex flex-col gap-3 md:flex-row">
            <div class="w-full font-bold md:w-32 md:border-r md:border-Btable flex items-center justify-start">
              公司統編發票
            </div>
            <div class="w-full md:w-[calc(100%-140px)]">
              <div class="flex gap-2 flex-col mb-5 sm:flex-row sm:items-center sm:gap-5 sm:mb-0">
                <div>
                  <input class="mr-3" type="radio" name="" id="" />
                  <label for="">寄送至訂購人電子信箱</label>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <label for="">統編</label>
                  <input class="shadow-main p-1 rounded-lg outline-none" type="text" name="" id=""
                    placeholder="請輸入統一編號" />
                </div>
              </div>
              <div class="flex flex-wrap gap-5">
                <p>發票品項</p>
                <div class="flex gap-5 items-center">
                  <div>
                    <input class="mr-3" type="radio" name="" id="" />
                    <label for="">禮盒</label>
                  </div>
                  <div>
                    <input class="mr-3" type="radio" name="" id="" />
                    <label for="">休閒食品</label>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center gap-5 mb-20">
        <RouterLink to="/product/shopMethod1" class="group linkStyle">
          <span class="linkWordStyle">繼續購物</span>
        </RouterLink>
        <!-- <button class="buttonStyle group" type="button">
                    <span class="btnWordStyle">下一步</span>
                </button> -->
        <RouterLink to="/orderCheck" class="group linkStyle">
          <span class="linkWordStyle">下一步</span>
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import btn_banner from '../../components/btn_banner.vue'
import btn_breadcrumb from '../../components/btn_breadcrumb.vue'
import btn_animateBG from '../../components/btn_animateBG.vue'

const checked = ref(false)

let orderUser = {
  name: 'OOO',
  email: 'OOOOOO@gmail.com',
  tphone: 'OOOOOOOOOO',
  hphone: 'OOOOOOOOO',
  address: 'OOOOOOOOOO'
}
let orderUserVistor = {
  name: '',
  email: '',
  ecode: '',
  tphone: '',
  tcode: '',
  hphone: '',
  address: ''
}

let consignee = {
  name: '',
  email: '',
  tphone: '',
  hphone: '',
  address: ''
}

function checkedUser() {
  if (checked.value) {
    consignee = {}
  } else {
    consignee = orderUser
  }
}
</script>
