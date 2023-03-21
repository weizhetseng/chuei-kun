<template>
  <div class="w-full xl:w-4/5 m-auto leading-loose text-lg border-b border-wrap mb-8 pb-8">
    <p>
      周一至周五：１７點前<span class="text-Mred text-xl font-bold">(網路下單15點前)</span
      >為２個工作天(不含例假日)<br />１７點後為３個工作天(不含例假日)
    </p>

    <p>周六及周日：一律周三到貨</p>
    <p>外島地區需配合船班或航班，需再加２－３個工作天配達。</p>
    <p class="mb-4">天候不佳會再順延。</p>
    <p>
      <span class="text-Mred text-xl font-bold">訂單確認後，恕不再接受追加及更改</span
      >，請勿重複下單，避免收到兩件貨。
    </p>

    <p>如需塑膠袋、紙袋，請至線上購物區加購，如需盒裝請註明於備註欄 (餅乾類恕不裝盒)。</p>
    <p>
      請依訂購單上價位訂購，<span class="text-Mred text-xl font-bold"
        >傳真訂單後，請『務必來電確認訂單及到貨日』。</span
      >
    </p>
    <p>價格、包裝如有異動，請依門市實際價格、包裝為主。</p>
    <p>餅乾類皆屬易碎品，運送過程中如有壓碎，恕不退換。</p>
    <p>發票如須開立統編，請先註明。如有疑問請於７日內換取。</p>
    <p>
      發票如須<span class="text-Mred text-xl font-bold">使用載具</span>，請備註載具號，並於<span
        class="text-Mred text-xl font-bold"
        >出貨後７日內開立。</span
      >
    </p>
    <p>如遇颱風延期出貨，則不另行通知。</p>
    <p class="text-Mred text-xl font-bold">
      年節前電話易滿線，請提早２個月以上下單，訂單採額滿為止。
    </p>
    <p>年節訂單可能會因臨時原物料短缺，如缺貨不另行通知，敬請見諒。</p>
    <p class="mb-4">年節前兩週，低溫商品不到貨。</p>
    <h4 class="mb-2">常溫商品</h4>
    <p>訂單達1500元，免運費(限一個地址)</p>
    <p class="mb-4">未達1500元須加收運費120元</p>
    <h4 class="mb-2">內含低溫商品</h4>
    <p>常溫與冷凍商品，合計滿4000元免冷凍運費(港式蘿蔔糕除外)， 未達需加收冷凍運費100元。</p>
    <p>【冷藏商品及港式蘿蔔糕沒有滿額免運】，皆需加收冷藏、冷凍運費，每箱200元。</p>
    <p class="text-Mred text-xl font-bold">(週一低溫商品不到貨)</p>
    <p>單訂餅乾類，1500元限裝30包，3000元限裝60包...以此類推。</p>
    <p class="mb-2">單筆訂單滿萬，贈送200元等值商品。</p>
    <p class="mb-2 text-Mred text-xl font-bold">離島地區目前僅受理電話訂購及傳真訂購</p>
    <p>離島地區，1500元以上(一箱)須另酌收離島運費</p>
    <p>離島地區無配送低溫商品之服務</p>
    <p class="text-Mred text-xl font-bold">配送地區為台灣本島及部分離島地區</p>
    <p class="mb-4 text-Mred text-xl font-bold">海外國家尚未開放訂購及配送~~~</p>
    <h4 class="mb-2">退換貨須知</h4>
    <p>
      收到商品後請立即清點是否正確、包裝是否完整，若與訂購內容不符、
      <br />品質異常，或其任何異狀請於7天內與客服人員聯絡037-867840。
    </p>

    <p class="mb-4">
      為維護商品的衛生安全，商品一經拆封後，除非品質有異常不良，
      <br />恕不接受退換貨。
    </p>
    <h4 class="mb-2">其他說明</h4>
    <p>若因不可抗力因素而無法按時送達商品，將延遲收貨時間， 造成不便，敬請見諒。</p>

    <p>商品外袋上如有註明冷藏或冷凍，請依標示存放，確保品質。</p>
    <p>因訂購人所提供的資料不完整而無法即時聯繫， 或因個人因素無法收件等導致損失，恕不接受退款。</p>

    <p>如有任何問題，歡迎致電詢問。 本公司保有接受訂單與否之權利。</p>
  </div>
  <button class="buttonStyle group" type="button" @click="goBack()">
    <span class="btnWordStyle">返回上一頁</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.back()
}
</script>
